import * as React from 'react'
import { BoxDirectoryInput } from './box-directory-input'


const TEST_STORYBOOK_ROOT = "https://5f7d1f04988db70022c94c9a-bxsgusmnlc.chromatic.com"
export function openOnStoryBook(path: string) {
    open(`${TEST_STORYBOOK_ROOT}/?path=${path}`)
}

export class BoxTab extends React.Component {

    onClickOpenStorybook(e) {
        openOnStoryBook("/story/example-button--primary")
    }

    onClickOpenGithub(e) {
        open("https://github.com/softmarshmallow/fontend-patterns/tree/main/react/storybook")
    }

    componentDidMount() {
        window.onmessage = (ev: MessageEvent) => {
            const msg = ev.data.pluginMessage;
            switch (msg.type) {
                case "result":
                case "preview":
            }
        }
    }

    render() {
        return (
            <div>
                <h6>Box section start</h6>
                <p>currently selected component is... {}</p>
                <div />
                <button onClick={this.onClickOpenStorybook}>
                    open in storybook
                </button>
                <button onClick={this.onClickOpenGithub}>
                    open in github
                </button>
                <BoxDirectoryInput />
                <div />
                <h6>Box section end</h6>
            </div>
        )
    }
}