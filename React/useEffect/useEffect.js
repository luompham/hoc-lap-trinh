const { useState, useEffect } = React;

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

const App = () => {

    const [posts, setPosts] = useState([]);
    const [btn, setBtn] = useState('posts');
    const [state, setState] = useState('');


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${btn}`)
            .then(response => response.json())
            .then((posts) => {
                setPosts(posts)
            })

    }, [btn])


    return (
        <>

            <h1>Hello</h1>
            {tabs.map((tab) => {
                return (
                    <button
                        style={btn === tab ? {
                            color: '#fff',
                            backgroundColor: '#000',
                        } : {}}
                        key={tab}
                        onClick={() => {
                            setBtn(tab)
                        }}>{tab}</button>
                )
            })}

            <div>
                <button onClick={() => {
                    setState(!state)
                }}>
                    Click
                </button>

                <input value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                </input>
            </div>

            <div>
                <ul>
                    {posts.map((post) => {
                        return (<li key={post.id}>{post.title || post.name}</li>)
                    })}

                </ul>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)