from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain_community.document_loaders import YoutubeLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.vectorstores import FAISS
from langchain_mistralai import MistralAIEmbeddings

load_dotenv()

embeddings = MistralAIEmbeddings(model="mistral-embed")

video_url = "https://www.youtube.com/watch?v=lG7Uxts9SXs"

def create_vdb_from_youtube_url(video_url: str) -> FAISS:
    loader = YoutubeLoader.from_youtube_url(video_url)
    transcript = loader.load()
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    docs = text_splitter.split_documents(transcript)
    db = FAISS.from_texts(texts=docs, embedding=embeddings)
    return db

print(create_vdb_from_youtube_url(video_url))