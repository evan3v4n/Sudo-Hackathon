from flask import Flask, render_template, request, redirect, url_for
import openai

app = Flask(__name__)

# OpenAI API key
openai.api_key = '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'

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

        # Make a call to the OpenAI API
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=user_input,
            max_tokens=150
        )

        chat_reply = response.choices[0].text.strip()

        return render_template('chat.html', user_input=user_input, chat_reply=chat_reply)

    return render_template('chat.html')

if __name__ == '__main__':
    app.run(debug=True)
