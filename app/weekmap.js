import { WeekList } from './week-list';

const WeekMap = () => {
    const links = WeekList();
    return (
        <>
            <div className="flex flex-wrap p-10 grid grid-cols-3 gap-4">
                {links.map((link, index) => (
                    <ul 
                        className="mt-12 h-72 w-5/6 transition rounded duration-300 ease-in-out transform hover:scale-110"
                        style={{backgroundImage: `url(${link.image})`}}
                        key={index}
                    >
                        <li>{link.title}</li>                        
                        <li className="hover:block">{link.description}</li>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default WeekMap;