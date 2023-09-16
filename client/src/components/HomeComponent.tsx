import { useEffect } from "react";
import OptionCard from "./OptionCard";

import asthma from "../assets/inhaler.png";
import diabetes from "../assets/diabetes.png";
import stomach from "../assets/stomach.png";
import covid from "../assets/covid.png";

const options = [
    { name: "Asthma", path: "/asthma", imgSrc: asthma },
    { name: "Diabetes", path: "/diabetes", imgSrc: diabetes },
    { name: "Stomachache", path: "/stomach", imgSrc: stomach },
    { name: "Covid", path: "/covid", imgSrc: covid },
];


const HomeComponent = () => {

    useEffect(() => {
        const getData = async () => {
            const req = await fetch('http://localhost:3000/questions', {
                method: "GET",
                
            }).then(res => res.json()).then((data) => console.log(data))
            console.log(req)
        }
        getData();
    }, [])
    return (
        <div className="flex justify-center mt-40 gap-32">
            {options.map((option) => (
                <OptionCard
                    key={option.name}
                    name={option.name}
                    path={option.path}
                    imgSrc={option.imgSrc}
                />
            ))}
        </div>
    );
};

export default HomeComponent;
