from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
import os

load_dotenv()
os.getenv("MISTRAL_API_KEY")

def generate_pet_name():
    llm = ChatMistralAI(temperature=0.7, model="mistral-large-latest")
    
    name = llm.invoke("I have a dog pet and I want a cool name for it. Suggest me five cool names for my pet.")
    
    return name

if __name__ == "__main__":
    print(generate_pet_name())
    
