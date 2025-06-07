import Header from './Header.jsx';
import Entry from './Entry.jsx';
import Data from './data.js';

export default function App() {
    const entries = Data.map((entry) => {
        return <Entry 
            img = {{src: entry.image.src, alt: entry.image.alt}}
            title = {entry.title}
            country = {entry.country}
            googleMapsLink = {entry.googleMapsLink}
            dates = {entry.dates}
            text = {entry.text}
            key = {entry.id}
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