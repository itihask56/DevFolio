import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {};

const PostPage = (props: Props) => {
  return (
    <section className="w-full bg-[#F1F6f9]">
      <Navbar />
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-4 space-y-4">
        <h1 className="font-extrabold text-3xl">ReHostify: Campus commerce made easy</h1>
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-violet-500">
              <p>Author::</p>
              <p className="font-bold">Itihas Verma</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-violet-500">
              <p>Created at:</p>
              <p className="font-bold">20/10/12</p>
        </div>
        </div>
        <Image
          src={"/images/fourth.jpg"}
          height={500}
          width={500}
          alt="not available"
          className="w-full rounded-2xl border-2 border-violet-500"
        />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum
          doloremque dolore ipsa, odio id. Perspiciatis magni incidunt inventore
          vitae nostrum, expedita illo ipsam dicta ipsum laudantium quidem harum
          non. Assumenda dolores veritatis enim, qui, officia asperiores, alias
          dicta laborum delectus voluptas est mollitia perspiciatis similique
          placeat eligendi sequi provident itaque iusto soluta sed. Ipsa id
          alias enim quis est. Itaque minus voluptatum optio reiciendis minima
          nulla rerum cum ea aliquid nesciunt ab velit quod, illo esse id
          commodi quo quos ipsam ipsa eligendi reprehenderit? Necessitatibus
          minus ea corporis adipisci! Error, oremque pariatur nam quo fugit quod
          facilis quibusdam ad vero dicta dolorem dolorum dolore. Commodi ipsa
          nulla possimus minus, facilis ullam, quod, corrupti perferendis in
          voluptatum sed iste! Iste eaque veniam dignissimos aliquam, esse
          consequatur laborum corporis ex fugiat odit impedit rerum inventore
          necessitatibus nihil iusto perspiciatis perferendis deleniti
          architecto voluptates est eveniet labore debitis saepe. Quod impedit
          praesentium laudantium, quasi! Quibusdam fuga earum inventore
          consectetur! Praesentium, nostrum inventore. Illo nisi sed quasi atque
          corrupti aut ratione. Optio, aspernatur eius?
        </p>
        <div className="flex items-center space-x-4 text-violet-500">
          <h3>Tech Used</h3>
          <div className="flex items-center space-x-2 text-sm font-bold">
            <p className="bg-violet-100 rounded-lg p-1">NEXT 13</p>
            <p className="bg-violet-100 rounded-lg p-1">TypeScript</p>
            <p className="bg-violet-100 rounded-lg p-1">Web Development</p>
            <p className="bg-violet-100 rounded-lg p-1">Sanity</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PostPage;
