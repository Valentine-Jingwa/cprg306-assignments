import { WeekList } from './week-list';
import Link from 'next/link';

const WeekMap = () => {
    const links = WeekList();
    const weekList = WeekList();
    const featuredweek = weekList.filter(week => week.title === "Week 7")[0];

    return (
        <>
        <div className="text-center">
            <h1 className="text-2xl font-bold">Featured week</h1>
            <div 
                className="relative group mt-12 h-40 w-5/6 mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                style={{ backgroundImage: `url(../images/student.jpeg)` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-80 flex flex-col items-center justify-center rounded-lg">
                    <p className="text-white text-2xl font-semibold">{featuredweek.title}</p>
                    <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{featuredweek.description}</p>
                    <Link className="text-white font-semibold text-xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" href={featuredweek.link}>
                        Go
                    </Link>
                </div>
            </div>
        </div>
            <div className="flex flex-wrap p-4 grid grid-cols-3 gap-2 text-center">
                {links.map((link, index) => (
                    <div 
                        className="relative group h-32 w-5/6 mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                        style={{ backgroundImage: `url(${link.image})` }}
                        key={index}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-80 flex flex-col items-center justify-center rounded-lg">
                            <p className="text-white text-2xl font-semibold">{link.title}</p>
                            <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{link.description}</p>
                            <Link className="text-white font-semibold text- mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" href={link.link}>
                                    Go
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WeekMap;