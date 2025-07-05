import React from "react";
import { FaUserFriends, FaMoneyBillWave, FaUniversity } from "react-icons/fa";
import FeatureCard from "../Shared/LandingPage/FeatureCard";
import SectionHeader from "../Shared/LandingPage/SectionHeader";

export default function WhatIsWildTeach() {
  const features = [
    {
      icon: <FaUserFriends />,
      title: "Peer Learning",
      description: "Connect with knowledgeable students",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Money",
      description: "Tutors get rewarded for teaching",
    },
    {
      icon: <FaUniversity />,
      title: "On Campus",
      description: "Convenient campus-based learning",
    },
  ];

  return (
    <div className="wildteach-fullscreen">
      <div className="wildteach-content">
        <div className="wildteach-inner">
          {/* SECTION HEADER */}
          <SectionHeader
            badge="🎓 PEER LEARNING REVOLUTION"
            title="What is"
            highlight="WildTeach"
            subtitle="Transform Your Learning Experience"
            layout="vertical"
          />

          <p className="wildteach-description-text">
            Connect with knowledgeable peers for personalized academic support
          </p>

          {/* DESCRIPTION */}
          <div className="wildteach-description">
            <p>
              WildTeach makes studying feel less like pressure and more like
              progress. Get paired with real students who’ve been in your shoes
              and actually understand how to help.
            </p>
            <p className="highlight-text">
              Whether you're learning or teaching, it all happens right on
              campus so it’s easier, more relatable, and surprisingly fun.
            </p>
          </div>

          {/* FEATURES */}
          <div className="features-showcase">
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="wildteach-decorations">
        <div className="deco-circle"></div>
        <div className="deco-square"></div>
        <div className="deco-triangle"></div>
      </div>
    </div>
  );
}
