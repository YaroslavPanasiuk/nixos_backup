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


load_dotenv()

embeddings = OllamaEmbeddings(model="llama3")

video_url = "https://www.youtube.com/watch?v=lG7Uxts9SXs"

def create_vdb_from_youtube_url(video_url: str) -> FAISS:
    loader = YoutubeLoader.from_youtube_url(video_url)
    transcript = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    docs = text_splitter.split_documents(transcript)
    
    db = FAISS(embedding_function=embeddings)
    return db


print(create_vdb_from_youtube_url(video_url))