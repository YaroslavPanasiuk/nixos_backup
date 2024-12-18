import langchain_helper as lch
import streamlit as sl

sl.title("🐶 Pets Name Generator")

animal_type = sl.sidebar.selectbox("What is your pet?", ("Dog", "Cat", "Hamster", "Rat", "Snake", "Lizard", "Cow"))

animal_labels = {
    "Dog": "What color is your dog?",
    "Cat": "What color is your cat?",
    "Hamster": "What color is your hamster?",
    "Rat": "What color is your rat?",
    "Snake": "What color is your snake?",
    "Lizard": "What color is your lizard?",
    "Cow": "What color is your cow?",
}

pet_color = sl.sidebar.text_area(
    label=animal_labels[animal_type],
    max_chars=25
)

with sl.sidebar:
    openai_api_key = sl.text_input("OpenAI API Key", key="langchain_search_api_key_openai", type="password")
    "[Get an OpenAI API key](https://platform.openai.com/account/api-keys)"
    "[View the source code](https://github.com/rishabkumar7/pets-name-langchain/tree/main)"

if pet_color:
    if not openai_api_key:
      sl.info("Please add your OpenAI API key to continue.")
      sl.stop()
    response = lch.generate_pet_name(animal_type, pet_color, openai_api_key)
    sl.text(response['pet_name'])