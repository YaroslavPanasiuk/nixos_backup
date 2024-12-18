from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
import os

load_dotenv()
os.getenv("MISTRAL_API_KEY")

def generate_pet_name():
    llm = ChatMistralAI(temperature=0.8, model="mistral-large-latest")
    
    prompt_template_name = PromptTemplate(
        input_variables=["animal_type"], 
        template = "I have a {animal_type} pet and I want a cool name for it. Suggest me five cool names for my pet. Give just the list of names with no context"
    )

    name_chain = LLMChain(llm=llm, prompt=prompt_template_name)    

    response = name_chain({"animal_type": animal_type})

    return names.content

if __name__ == "__main__":
    print(generate_pet_name())
    
