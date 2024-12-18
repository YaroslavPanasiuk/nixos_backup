from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain_community.document_loaders import YoutubeLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.vectorstores import FAISS
from langchain_community.docstore.in_memory import InMemoryDocstore
from langchain_mistralai import MistralAIEmbeddings
import faiss
import os

load_dotenv()

embeddings = MistralAIEmbeddings(model="mistral-embed")

video_url = "https://www.youtube.com/watch?v=lG7Uxts9SXs"

def create_vdb_from_youtube_url(video_url: str) -> FAISS:
    loader = YoutubeLoader.from_youtube_url(video_url)
    transcript = loader.load()
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    docs = text_splitter.split_documents(transcript)
    db = FAISS.from_documents(docs, embeddings)
    return db


index = faiss.IndexFlatL2(len(embeddings.embed_query("hello world")))
print(str(index))

vector_store = FAISS(
    embedding_function=embeddings,
    index=index,
    docstore=InMemoryDocstore(),
    index_to_docstore_id={},
)
print(vector_store)