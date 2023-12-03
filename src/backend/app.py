from flask import Flask, render_template, request, redirect, url_for
import openai
from config import OPENAI_KEY

app = Flask(__name__)
GPT_MODEL = "gpt-3.5-turbo"
# OpenAI API key
openai.api_key = OPENAI_KEY

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        user_input = request.form['user_input']
        print(f"Received user input: {user_input}")

        # Make a call to the OpenAI API
        response = openai.ChatCompletion.create(
    messages=[
        {'role': 'system', 'content': 'You answer questions about the World Climate.'},
        {'role': 'user', 'content': user_input},
    ],
    model=GPT_MODEL,
    temperature=0.5
)

        chat_reply = response.choices[0].text.strip()
        print(f"Chat reply: {chat_reply}")


        return render_template('chat.html', user_input=user_input, chat_reply=chat_reply)

    return render_template('chat.html')

if __name__ == '__main__':
    app.run(debug=True)
