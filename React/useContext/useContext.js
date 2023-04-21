const { useState, createContext, useContext } = React;
const ThemeContext = createContext();
console.log(ThemeContext);

const Paragraph = () => {
    const theme = useContext(ThemeContext);
    console.log({ theme });
    return (
        <>
            <p className={theme}>20 thg 10, 2020 · HTML form submission works differently when implementing it within a React.js component. Normally, the browser would render the HTML and, depending on the action.</p>
        </>
    )
}

const Content = () => {
    return (
        <Paragraph />
    )
}


const App = () => {

    const [theme, setTheme] = useState('dark');
    function handleClick() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <>
            <ThemeContext.Provider value={theme}>
                <h1>useContext</h1>
                <button onClick={handleClick}>Toggle</button>

                <Content theme={theme} />
            </ThemeContext.Provider>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);