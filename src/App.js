import React from "react"
import {connect} from "react-redux";

import {Button, Header, Headline, ListItem} from "./components/index"
import {fetchPosts} from "./redux/actions/posts.action";

import {tempArr} from "./assets/data/data";
import "./App.scss"


class App extends React.Component {
    fetch = () => this.props.fetchPosts()

    render() {
        return (
            <div data-test="app-component">
                <Header/>
                <section className="main">
                    <Headline header="Posts" description="Click the button to render posts!" tempArr={tempArr}/>
                    <Button buttonText="GET POSTS" emitEvent={this.fetch}/>
                    {this.props.posts.length > 0 &&
                    <>
                        {this.props.posts.map((post, index) => {
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