from dotenv import load_dotenv
from langchain_community.document_loaders import YoutubeLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.vectorstores import FAISS
from uuid import uuid4
from langchain_core.documents import Document
from langchain_community.docstore.in_memory import InMemoryDocstore
from langchain_ollama import OllamaEmbeddings
import faiss
import os

os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["HF_TOKEN"] = "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"

load_dotenv()

embeddings = OllamaEmbeddings(model="llama3")

video_url = "https://www.youtube.com/watch?v=lG7Uxts9SXs"

def create_vdb_from_youtube_url(video_url: str) -> FAISS:
    loader = YoutubeLoader.from_youtube_url(video_url)
    transcript = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    docs = text_splitter.split_documents(transcript)
    
    
    index = faiss.IndexFlatL2(len(embeddings.embed_query(str(docs[0]))))
    vector_store = FAISS(
        embedding_function=embeddings,
        index=index,
        docstore=InMemoryDocstore(),
        index_to_docstore_id={},
    )
    uuids = [str(uuid4()) for _ in range(len(docs))]
    vector_store.add_documents(documents=docs, ids=uuids)
    return docs


print(create_vdb_from_youtube_url(video_url))