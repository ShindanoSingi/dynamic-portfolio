import React, { useEffect } from "react";
import "./Experience.css";

import { GetExperiences } from "../../apicalls/experience";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { toast } from "react-toastify";

import { motion } from "framer-motion";

import { SetExperiences } from "../../redux/userSlice";
import Button from "../../components/button/Button";
import { useLocation } from "react-router-dom";

function Experience() {
      const pathName = useLocation().pathname.substring(1);
      const handleBack = () => {
            window.history.back();
      };

      const dispatch = useDispatch();

      const { experiences } = useSelector((state) => state.userReducer);

      const getExperiences = async () => {
            try {
                  const response = await GetExperiences();
                  dispatch(hideLoader());
                  dispatch(SetExperiences(response.data.data));
                  // toast.success(response.data.message);
                  dispatch(hideLoader());
            } catch (error) {
                  toast.error(error.message);
            }
      };

      useEffect(() => {
            getExperiences();
      }, []);

      return (
            <div className="p-2">
                  <div className="mb-2 flex justify-between items-center h-[3.5rem] z-50 bg-[--info] p-2 rounded-md">
                        <Button
                              label={pathName}
                              color="info"
                              width="0%"
                              fontSize="1.4rem"
                        />

                        <button
                              className="buttonClass font-bold"
                              onClick={handleBack}
                        >
                              Back
                        </button>
                  </div>
                  <div className="flex flex-col max-h-[] overflow-scroll gap-4 py-2">
                        {experiences &&
                              experiences.map((experience) => {
                                    return (
                                          <div class="flip-card p-0">
                                                <div class="flip-card-inner">
                                                      <div class="flip-card-front">
                                                            <div className="flex flex-col items-center gap-10">
                                                                  <img
                                                                  className="w-[40%] h-[auto]"
                                                                        src={
                                                                              experience.image
                                                                        }
                                                                        alt=""
                                                                  />
                                                                  <h1 class="text-3xl font-extrabold">
                                                                        {
                                                                              experience.jobTitle
                                                                        }
                                                                  </h1>
                                                                  <div className=" flex justify-around gap-2 text-lg">
                                                                        <strong>
                                                                              {
                                                                                    experience.startDate
                                                                              }
                                                                        </strong>
                                                                        <strong>
                                                                              -
                                                                        </strong>
                                                                        <strong>
                                                                              {
                                                                                    experience.endDate
                                                                              }
                                                                        </strong>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div class="flip-card-back p-4">
                                                            <h2 class="title text-lg">
                                                                  {
                                                                        experience.description
                                                                  }
                                                            </h2>
                                                      </div>
                                                </div>
                                          </div>
                                    );
                              })}
                  </div>
            </div>
      );
}

export default Experience;
