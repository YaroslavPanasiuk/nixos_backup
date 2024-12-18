import transformers
import torch
import os

model_id="meta-llama/Llama-3.2-11B-Vision-Instruct"

pipeline = pipeline("text-generation", model=model_id, max_length=50)

hf_pipeline = HuggingFacePipeline(pipeline)

#os.environ('[HF_TOKEN]') = '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'