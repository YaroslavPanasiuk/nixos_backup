from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
from langchain_community.agent_toolkits.load_tools import load_tools
from langchain.agents import initialize_agent
from langchain.agents import AgentType
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


def langchain_agent():
    llm = ChatMistralAI(temperature=0.5, model="mistral-large-latest")
    tools = load_tools(["wikipedia", "llm-math"], llm = llm)
    
    agent = initialize_agent(
        tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True
    )
    result = agent.run(
        "What is the average age of a dog? Multiply the age by 3"
    )
    return result

if __name__ == "__main__":
    print(langchain_agent())

