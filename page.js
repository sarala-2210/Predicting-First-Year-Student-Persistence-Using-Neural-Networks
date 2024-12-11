"use client";

import { useState } from "react";
import { Montserrat_Alternates } from "next/font/google";

import { predictFirstYearPersistence } from "@/utils/apiConnector";
import BarGraph from "@/components/BarGraph";


const montserrat_subrayada = Montserrat_Alternates({ subsets: ["latin"], weight:["400"] });


export default function Home() {
  const [formData, setFormData] = useState({
    first_language: 1,
    funding: 2,
    school: 6,
    fast_track: 2,
    coop: 2,
    residency: 1,
    gender: 2,
    prev_education: 1,
    age_group: 1,
    english_grade: 9,
    first_term_gpa: 1.46,
    second_term_gpa: 0.0,
    high_school_average_mark: 81.0,
    math_score: 17.0,
  });

  const [apiResult, setApiResult] = useState(null);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await predictFirstYearPersistence(formData);
    console.log("Response from API:", response);
    setApiResult(response);
  };

  return (
    <div className={`bg-gradient-to-br from-[#032761] to-[#9D002E] via-black items-center justify-center text-white p-4 min-h-[100vh] bg-fixed ${montserrat_subrayada.className}`
} >
    <h2 className="text-[2.5rem] font-bolder m-auto text-center mb-4 text-slate-200 ">First Year Persistence Calculator</h2>
      <form 
        onSubmit={handleSubmit} 
        className="bg-gradient-to-br from-rose-100 to-blue-100 p-8 rounded-xl text-black shadow-md w-full m-auto max-w-lg"
      >

      <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor="first_language">First Language</label>
      <select
        name="first_language"
        id="first_language"
        value={formData.first_language}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        <option value="" disabled>Select your first language</option>
        <option value="1">English</option>
        <option value="2">French</option>
        <option value="3">Other</option>
      </select>
    </div>

    <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2" htmlFor="funding">Funding</label>
    <select
      name="funding"
      id="funding"
      value={formData.funding}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      <option value="" disabled>Select your funding option</option>
      <option value="1">Apprentice_PS</option>
      <option value="2">GPOG_FT</option>
      <option value="3">Intl Offshore</option>
      <option value="4">Intl Regular</option>
      <option value="5">Intl Transfer</option>
      <option value="6">Joint Program Ryerson</option>
      <option value="7">Joint Program UTSC</option>
      <option value="8">Second Career Program</option>
      <option value="9">Work Safety Insurance Board</option>
    </select>
  </div>
  

        
  <div className="mb-4">
  <label className="block text-gray-700 font-medium mb-2" htmlFor="school">School</label>
  <select
    name="school"
    id="school"
    value={formData.school}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
  >
    <option value="" disabled>Select your school</option>
    <option value="1">Advancement</option>
    <option value="2">Business</option>
    <option value="3">Communications</option>
    <option value="4">Community and Health</option>
    <option value="5">Hospitality</option>
    <option value="6">Engineering</option>
    <option value="7">Transportation</option>
  </select>
</div>



<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="fast_track">Fast Track</label>
<select
  name="fast_track"
  id="fast_track"
  value={formData.fast_track}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select fast track option</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
</div>

        
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="coop">Co-op</label>
<select
  name="coop"
  id="coop"
  value={formData.coop}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select co-op option</option>
  <option value="1">Yes</option>
  <option value="2">No</option>
</select>
</div>

        
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="residency">Residency</label>
<select
  name="residency"
  id="residency"
  value={formData.residency}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select residency</option>
  <option value="1">Domestic</option>
  <option value="2">International</option>
</select>
</div>

        
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="gender">Gender</label>
<select
  name="gender"
  id="gender"
  value={formData.gender}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select gender</option>
  <option value="1">Female</option>
  <option value="2">Male</option>
  <option value="3">Other</option>
</select>
</div>

        
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="prev_education">Previous Education</label>
<select
  name="prev_education"
  id="prev_education"
  value={formData.prev_education}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select previous education</option>
  <option value="1">High School</option>
  <option value="2">Post Secondary</option>
</select>
</div>

        
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="age_group">Age Group</label>
<select
  name="age_group"
  id="age_group"
  value={formData.age_group}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select your age group</option>
  <option value="1">0 to 18</option>
  <option value="2">19 to 20</option>
  <option value="3">21 to 25</option>
  <option value="4">26 to 30</option>
  <option value="5">31 to 35</option>
  <option value="6">36 to 40</option>
  <option value="7">41 to 50</option>
  <option value="8">51 to 60</option>
  <option value="9">61 to 65</option>
  <option value="10">66+</option>
</select>
</div>

        
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="english_grade">English Grade</label>
<select
  name="english_grade"
  id="english_grade"
  value={formData.english_grade}
  onChange={handleChange}
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
>
  <option value="" disabled>Select your English grade</option>
  <option value="1">Level-130</option>
  <option value="2">Level-131</option>
  <option value="3">Level-140</option>
  <option value="4">Level-141</option>
  <option value="5">Level-150</option>
  <option value="6">Level-151</option>
  <option value="7">Level-160</option>
  <option value="8">Level-161</option>
  <option value="9">Level-170</option>
  <option value="10">Level-171</option>
  <option value="11">Level-180</option>
</select>
</div>

        

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="first_term_gpa">First Term GPA</label>
          <input
            type="number"
            name="first_term_gpa"
            id="first_term_gpa"
            placeholder="first_term_gpa"
            value={formData.first_term_gpa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="second_term_gpa">Second Term GPA</label>
          <input
            type="number"
            name="second_term_gpa"
            id="second_term_gpa"
            placeholder="second_term_gpa"
            value={formData.second_term_gpa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="high_school_average_mark">High School Average Mark</label>
          <input
            type="number"
            name="high_school_average_mark"
            id="high_school_average_mark"
            placeholder="high_school_average_mark"
            value={formData.high_school_average_mark}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="math_score">Math Score</label>
          <input
            type="number"
            name="math_score"
            id="math_score"
            placeholder="Math Score"
            value={formData.math_score}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      {
        apiResult &&
        
        <div className="bg-gradient-to-br from-rose-100 to-blue-100 w-[50%] max-md:w-[90%] rounded-2xl p-8 my-14 m-auto">
        <h1 className="text-center text-slate-800 text-[1.5rem] pb-10">The Predicted Class is: { apiResult.class}</h1>
        <h1 className="text-slate-800">Probability Distribution</h1>
            <BarGraph data={apiResult.probability} />
            
          </div>
    }



    </div>
  );
}



