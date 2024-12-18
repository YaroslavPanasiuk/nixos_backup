from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
import os

load_dotenv()
os.getenv("MISTRAL_API_KEY")

def generate_pet_name(animal_type, pet_color):
    llm = ChatMistralAI(temperature=0.8, model="mistral-large-latest")
    
    prompt_template_name = PromptTemplate.from_template(
        "I have a {animal_type} pet with {pet_color} fur and I want a cool name for it. Suggest me five cool names for my pet. Give just the list of names with no context"
    )

    name_chain = prompt_template_name | llm    

    response = llm.invoke(prompt_template_name.format(animal_type = animal_type, pet_color = pet_color)).content

    return response

if __name__ == "__main__":
    print(generate_pet_name("elephant", "pink"))
    
