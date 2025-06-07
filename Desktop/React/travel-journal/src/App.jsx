import Header from './Header.jsx';
import Entry from './Entry.jsx';
import Data from './data.js';

export default function App() {
    const entries = Data.map((entry) => {
        return <Entry 
            key = {entry.id}
            {...entry}
        />
    });

    return(
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    );
}