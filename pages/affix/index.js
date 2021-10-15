import React, { useState } from 'react';
import { Affix, Button } from 'antd';


const Index = () => {

    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);

    return (
        <div className="scrollable-container mv-50 mh-50">
            <h1 className="text-center underline">Affix</h1>

            <br />
            <Affix offsetTop={top}>
                <Button type="danger" onClick={() => setTop(top + 10)}>
                    I am in top
                </Button>
            </Affix>

            <p style={{ fontSize: "25px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quasi? Explicabo maiores aperiam saepe suscipit quis? Eveniet commodi, odio mollitia neque dicta incidunt necessitatibus! Cumque, quia a! Repudiandae aspernatur aliquam harum alias molestias cupiditate. Delectus tenetur facere dolorem nobis inventore quod. Voluptatum saepe vel ut. Dolores, magnam. Nam temporibus quas officiis animi culpa similique voluptates, deserunt facere et, doloremque cum officia fugiat excepturi molestias commodi explicabo beatae veritatis vero dignissimos asperiores. Incidunt laborum delectus dolore voluptatibus quas ipsam aperiam voluptates consequuntur, blanditiis provident autem exercitationem odio necessitatibus laboriosam, error consequatur rerum adipisci reiciendis quam id? Suscipit mollitia ipsa enim atque. Minus deserunt natus optio commodi ducimus ea recusandae id voluptatum, quasi itaque quaerat facere quod aspernatur excepturi hic. Mollitia ducimus repellat velit ratione quod accusamus nam, et illo debitis est sunt numquam eius ab consectetur ullam amet animi fugiat voluptatem sed nulla aliquid corporis necessitatibus dolor. Nulla, possimus sunt sapiente rerum dignissimos reprehenderit laborum, odio dicta maiores in illum nisi obcaecati assumenda quo repellendus, similique tenetur odit! Laborum perferendis magni repellat nam iste reiciendis praesentium sapiente error, nostrum qui quasi mollitia! Facilis dolorem possimus doloribus, nobis hic veritatis officiis vero iste rem velit? Eos laudantium blanditiis illo distinctio nemo ullam!</p>
            <p style={{ fontSize: "25px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quasi? Explicabo maiores aperiam saepe suscipit quis? Eveniet commodi, odio mollitia neque dicta incidunt necessitatibus! Cumque, quia a! Repudiandae aspernatur aliquam harum alias molestias cupiditate. Delectus tenetur facere dolorem nobis inventore quod. Voluptatum saepe vel ut. Dolores, magnam. Nam temporibus quas officiis animi culpa similique voluptates, deserunt facere et, doloremque cum officia fugiat excepturi molestias commodi explicabo beatae veritatis vero dignissimos asperiores. Incidunt laborum delectus dolore voluptatibus quas ipsam aperiam voluptates consequuntur, blanditiis provident autem exercitationem odio necessitatibus laboriosam, error consequatur rerum adipisci reiciendis quam id? Suscipit mollitia ipsa enim atque. Minus deserunt natus optio commodi ducimus ea recusandae id voluptatum, quasi itaque quaerat facere quod aspernatur excepturi hic. Mollitia ducimus repellat velit ratione quod accusamus nam, et illo debitis est sunt numquam eius ab consectetur ullam amet animi fugiat voluptatem sed nulla aliquid corporis necessitatibus dolor. Nulla, possimus sunt sapiente rerum dignissimos reprehenderit laborum, odio dicta maiores in illum nisi obcaecati assumenda quo repellendus, similique tenetur odit! Laborum perferendis magni repellat nam iste reiciendis praesentium sapiente error, nostrum qui quasi mollitia! Facilis dolorem possimus doloribus, nobis hic veritatis officiis vero iste rem velit? Eos laudantium blanditiis illo distinctio nemo ullam!</p>

            <br />
            <Affix offsetBottom={bottom}>
                <Button type="primary" onClick={() => setBottom(bottom + 10)}>
                    I am in bottom
                </Button>
            </Affix>
        </div>
    );
};

export default Index;
