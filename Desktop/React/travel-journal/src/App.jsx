import Header from './Header.jsx';
import Entry from './Entry.jsx';
import MtFuji from './assets/mt-fuji.jpg';

export default function App() {
    return(
        <>
            <Header />
            <main className="container">
                <Entry 
                    img={{src: MtFuji, alt: 'Mount Fuji'}}
                    title='Mount Fuji'
                    country='Japan'
                    googleMapsLink='https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D'
                    dates='Jan 12, 2021 - Jan 24, 2021'
                    text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji 
                            is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
                />
            </main>
        </>
    );
}