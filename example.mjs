import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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' // Replace with your OpenAI API key
});

const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
            role: 'user',
            content: 'Suggest tasks for college students.',
        },
    ],
});

console.log(completion.choices[0].message.content);
