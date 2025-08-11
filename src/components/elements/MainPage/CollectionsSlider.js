// import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react";
import { CONTRACT_ADDRESS } from "../../../services/config";
import { ethers } from "ethers";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PaperCarouselMainStyle } from "../../styles/MainStyle";
import { Typography } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

function CollectionsSlider() {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider();
        const contractAddress = CONTRACT_ADDRESS;
        const contractABI = [
          // Add ABI for the getAllTokens function
          {
            constant: true,
            inputs: [
              {
                name: "_name",
                type: "string",
              },
              {
                name: "_imageUrl",
                type: "string",
              },
              {
                name: "_category",
                type: "string",
              },
            ],
            name: "getAllTokens",
            outputs: [
              {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
              },
            ],

            payable: false,
            stateMutability: "view",
            type: "function",
          },
        ];
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider
        );

        const tokenIds = await contract.getAllTokens();
        const collectionsData = await Promise.all(
          tokenIds.map(async (tokenId) => {
            const collectionData = await contract.collectionData(tokenId);
            return collectionData;
          })
        );

        setCollections(collectionsData);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        partialVisible={false}
        autoPlaySpeed={5000}
        dotListClass="custom-dot-list-style"
      >
        {collections.map((collection, index) => {
          return (
            <div className="slider" key={index} elevation="16">
              <PaperCarouselMainStyle elevation={16}>
                <Typography variant="h6">{collection.name}</Typography>
                <Typography variant="body2">
                  Category: {collection.category}
                </Typography>
                <img src={collection.imageUrl} alt={collection.name} />
              </PaperCarouselMainStyle>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default CollectionsSlider;
