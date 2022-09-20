import { createSlice } from '@reduxjs/toolkit'

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        value: {
            text:
                `
# Your basic Markdown playground
## A basic demonstration
- This is a link:
[Google](https://www.google.com)
- This is a block of code:
\`\`\`python3
def hola_mundo():
print("Hola mundo!")
\`\`\`
- A quote:
> ¿A dónde va la gente? Donde va Vicente
> > By Vicente
- An image:
![Imagensita](https://en.wiktionary.org/wiki/cat#/media/File:Cat03.jpg)
- Some boldy, boldy text:
**QUE TE CALES**
- Some inline code like this: \`<h1>A great title</h1>\`
`
        }
    },
    reducers: {
        setText: (state, action) => {
            state.value.text = action.payload
        },
    },

});

export const { setText } = markdownSlice.actions
export default markdownSlice.reducer;