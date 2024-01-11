import React from "react";
import Button from "../../components/button/Button";
import "./Projects.css";
import { useLocation } from "react-router-dom";

function Projects() {
      const pathName = useLocation().pathname.substring(1);

      return (
            <div className="bg-[--primary-color] min-h-[100lvh] pb-2">
                  <div className="mb-2">
                        <Button
                              label={pathName}
                              color="info"
                              width="100%"
                              fontSize="1.4rem"
                        />
                  </div>

                  <div className="cards-container">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[--orange-background] pb-2 flex-grow">
                              <img
                                    class="w-full "
                                    src="https://images.pexels.com/photos/144474/pexels-photo-144474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Sunset in the mountains"
                              />
                              <div className="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">
                                          The Coldest Sunset
                                    </div>
                                    <p class="text-[--light-text-color] text-base">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipisicing elit.
                                          Voluptatibus quia, nulla! Maiores et
                                          perferendis eaque, exercitationem
                                          praesentium nihil.
                                    </p>
                              </div>
                              <div className="flex flex-col items-center">
                                    <div className="text-[1.2rem] font-bold">
                                          Tech Stacks
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                          <div className="bg-[--lighter-orange-background] p-2 items-center flex flex-col rounded-md">
                                                <span class="rounded-full px-3 py-1 text-[1.1rem] font-semibold text-[--darkest-gray]">
                                                      HTML
                                                </span>
                                                <img
                                                      className="my-image"
                                                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png"
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[--orange-background] pb-2">
                              <img
                                    class="w-full "
                                    src="https://images.pexels.com/photos/144474/pexels-photo-144474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Sunset in the mountains"
                              />
                              <div className="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">
                                          The Coldest Sunset
                                    </div>
                                    <p className="text-[--light-text-color] text-base">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipisicing elit.
                                          Voluptatibus quia, nulla! Maiores et
                                          perferendis eaque, exercitationem
                                          praesentium nihil.
                                    </p>
                              </div>
                              <div className="flex flex-col items-center">
                                    <div className="text-[1.2rem] font-bold">
                                          Tech Stacks
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                          <div className="bg-[--lighter-orange-background] p-2 items-center flex flex-col rounded-md">
                                                <span className="rounded-full px-3 py-1 text-[1.1rem] font-semibold text-[--darkest-gray]">
                                                      HTML
                                                </span>
                                                <img
                                                      className="my-image"
                                                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png"
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Projects;
