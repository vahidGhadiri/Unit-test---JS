import React from "react"
import {connect} from "react-redux";

import {Button, Header, Headline, ListItem} from "./components/index"
import {fetchPosts} from "./redux/actions/posts.action";

import {tempArr} from "./assets/data/data";
import "./App.scss"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBtnHide: false
        }
    }

    changeBtnVisibility = () => {
        const {isBtnHide} = this.state
        this.setState({
            isBtnHide: !isBtnHide
        })
    }


    fetch = async () => {
        await this.props.fetchPosts()
        await this.changeBtnVisibility()
    }

    sampleFunction_returnsValue = (number) => {
        return number + 1
    }

    render() {
        const {posts} = this.props
        const {isBtnHide} = this.state
        return (
            <div data-test="app-component">
                <Header/>
                <section className="main">
                    {!isBtnHide &&
                    <Headline header="Posts" description="Click the button to render posts!" tempArr={tempArr}/>}
                    {!isBtnHide && <Button buttonText="GET POSTS" emitEvent={this.fetch}/>}
                    {posts.length > 0 &&
                    <>
                        {posts.map((post, index) => {
                            return <ListItem key={index} title={post.title} desc={post.body}/>
                        })}
                    </>
                    }
                </section>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)