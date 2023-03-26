const { useState, useEffect } = React;

const Content = () => {
    const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [button, setButton] = useState('posts');
    const [posts, setPosts] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${button}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [button])

    useEffect(() => {

        const scrollHandle = () => {
            // console.log(window.scrollY)

            if (window.scrollY >= 200) {
                //show
                setShowGoToTop(true)
            } else {
                //hide
                setShowGoToTop(false)
            }
            // setShowGoToTop(window.scrollY>=200)

            console.log(window.scrollY);
        }
        window.addEventListener('scroll', scrollHandle);
        console.log('Added event listener')
        return () => {
            window.removeEventListener('scroll', scrollHandle);
            console.log('Removed event listener')

        }

    }, []);
    return (
        <>
            <h1>useEffect DOM Events</h1>
            <div>
                {tabs.map((tab) => {

                    return (
                        <button
                            style={button === tab ? {
                                color: '#fff',
                                backgroundColor: '#333'
                            } : {}}
                            key={tab}
                            onClick={() => {
                                setButton(tab)
                            }}
                        >{tab}</button>

                    )

                })
                }

                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))}
                </ul>
                {showGoToTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 40
                        }}
                    >
                        Go to Top
                    </button>
                )}
            </div>
        </>
    )
}

const App = () => {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);

        }
    }, [])
    return (
        <>
            <div>
                <button onClick={() => {
                    setToggle(!toggle)
                }}>Toggle</button>
                {toggle && (
                    <>
                        <h1>{width}</h1>
                        <Content />
                    </>
                )}
            </div>
        </>
    )

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
