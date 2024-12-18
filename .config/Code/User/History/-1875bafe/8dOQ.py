import langchain_helper as lch
import streamlit as sl

sl.title("🐶 Pets Name Generator")

animal_type = sl.sidebar.selectbox("What is your pet?", ("Dog", "Cat", "Hamster", "Rat", "Snake", "Lizard", "Cow"))

pet_color = sl.sidebar.text_area(
    label=f"What color is your {animal_type}?",
    max_chars=25
)

if pet_color:
    response = lch.generate_pet_name(animal_type, pet_color)
    sl.text(response)