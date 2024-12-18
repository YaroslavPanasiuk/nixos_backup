from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
import os

load_dotenv()
os.getenv("MISTRAL_API_KEY")

def generate_pet_name():
    llm = ChatMistralAI(temperature=0.5, model="mistral-large-latest")
    
    names = llm.invoke("I have a dog pet and I want a cool name for it. Suggest me five cool names for my pet. Give just the list of names with no context")

    return names

if __name__ == "__main__":
    print(generate_pet_name().content)
    
