"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Quote } from "./quote";
import data from "../../../public/data/feedbacks.json";
import Section from "./section";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 256 },
    items: 1,
    slidesToSlide: 1
  }
};

export default function Testimonial() {

    return (
        <Section>
            <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter md:pr-8 pb-6 xl:pb-8">Feedback matters</h2>
            <p className="text-base xl:text-xl tracking-tighter md:pr-8 pb-6 xl:pb-8">What people that I worked with says about me</p>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                ssr={true}
                removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
            >
                {data.map((item, key) => {
                    return <Quote text={item.feedback} author={item.author} />
                })}
            </Carousel>
        </Section>
    )
}