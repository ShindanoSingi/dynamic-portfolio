import React from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function Error() {
      const navigate = useNavigate();

      return (
            <div>
                  <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 bg-[--primary-color]">
                        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0 ">
                              <div className="relative">
                                    <div className="absolute">
                                          <div className="">
                                                <h1 className="my-2 --text-color font-bold text-2xl">
                                                      Looks like you've found
                                                      the doorway to the great
                                                      nothing
                                                </h1>
                                                <p className="my-2 mb-12 --text-color">
                                                      Sorry about that! Please
                                                      visit our home page to get
                                                      where you need to go.
                                                </p>
                                                <Button
                                                      label="Take me there!"
                                                      width="100%"
                                                      onClick={() =>
                                                            navigate("/")
                                                      }
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                        </div>
                  </div>
            </div>
      );
}

export default Error;
