import { useState, useEffect } from "react";
import { fetchPuppies } from "../API";
import PuppyDiv from "../components/PuppyDiv";

export default function AllPlayers() {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
      async function fetchFunction() {
        const receivedPuppies = await fetchPuppies()
        setPuppies(receivedPuppies);
      }
      fetchFunction();
    }, [])

    return (
        <>
        <div className="justify-items-center">
            <h1 className="text-3xl font-bold underline shadow-inner">THE PUPPY BOWL .ᐟ.ᐟ.ᐟ</h1>
            <form>
              <label>SEARCH FOR PUPPY PLAYER</label>
              <input type="text" placeholder="Search..." name="search" />
              <button type="submit"><i></i></button>
            </form>
            {
                puppies.map((puppy) => {
                    return <PuppyDiv key={puppy.id} puppy={puppy} />
                })
            }
        </div>
        </>
    );
};