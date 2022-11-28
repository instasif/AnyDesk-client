import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            _id: 1,
            q: ' What are the different ways to manage a state in a React application?',
            a: 'With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input. This is similar to how designers think about UI.'
        },
        {
            _id: 2,
            q: 'How does prototypical inheritance work?',
            a: 'When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.'
        },
        {
            _id: 3,
            q: 'What is a unit test? Why should we write unit tests?',
            a: 'The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.'
        },
        {
            _id: 1,
            q: 'React vs. Angular vs. Vue?',
            a: 'If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready. A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.'
        },
    ]
    return (
        <section className='my-16'>
            <div>
                <h4 className="text-xl text-orange-400 font-bold">Reacions</h4>
                <h2 className="text-4xl">What our customer says</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6'>
                {
                    blogs.map(b => <Blog key={b._id} b={b}/>)
                }
            </div>
        </section>
    );
};

export default Blogs;