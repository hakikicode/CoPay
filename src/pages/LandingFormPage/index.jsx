import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Comp from "components/Comp";

const LandingFormPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-commissioner items-center justify-end mx-auto pt-4 w-full">
        <div className="md:h-[602px] sm:h-[609px] h-[720px] md:px-5 relative w-full">
          <div className="absolute md:h-[602px] sm:h-[609px] h-[720px] inset-[0] justify-center m-auto w-[97%] md:w-full">
            <div className="md:h-[602px] sm:h-[609px] h-[720px] m-auto w-full">
              <div className="md:h-[602px] sm:h-[609px] h-[720px] m-auto w-full">
                <div className="absolute bottom-[0] flex md:h-[602px] h-[609px] justify-end right-[0] w-[57%] md:w-full">
                  <Img
                    className="h-[33px] mb-[148px] ml-auto mr-[147px] mt-auto w-[33px]"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <div className="absolute flex md:h-[602px] h-[609px] inset-[0] justify-end m-auto w-full">
                    <Img
                      className="h-[135px] mb-3 ml-auto mr-[43px] mt-auto"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <div className="absolute flex md:flex-col flex-row md:gap-[47px] h-full inset-[0] items-start justify-between m-auto w-full">
                      <Img
                        className="h-[68px] md:mt-0 mt-[29px]"
                        src="images/img_group_deep_orange_100.svg"
                        alt="group_One"
                      />
                      <div className="md:h-[487px] h-[609px] relative w-3/4 md:w-full">
                        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[342px] justify-start left-[0] w-[34%]">
                          <div className="border-[3px] border-deep_orange-100 border-solid h-[21px] mr-[172px] rounded-[11px] w-[22px]"></div>
                          <div className="border-[3px] border-deep_orange-100 border-solid h-4 md:ml-[0] ml-[179px] rounded-[50%] w-4"></div>
                        </div>
                        <div className="absolute h-[487px] inset-x-[0] mx-auto top-[0] w-[99%] sm:w-full">
                          <div className="absolute h-[487px] inset-[0] justify-center m-auto w-[96%] sm:w-full">
                            <div className="absolute flex flex-col gap-[13px] inset-x-[0] justify-start mx-auto top-[3%] w-full">
                              <Img
                                className="h-9 w-[37px]"
                                src="images/img_airplane_deep_orange_100.svg"
                                alt="airplane_One"
                              />
                              <div className="border-[3px] border-deep_orange-100 border-solid h-[54px] md:ml-[0] ml-[493px] rounded-[28px] w-[11%]"></div>
                            </div>
                            <Img
                              className="absolute h-[487px] inset-[0] justify-center m-auto object-cover w-[88%]"
                              src="images/img_bitmap.png"
                              alt="bitmap"
                            />
                          </div>
                          <div className="absolute bg-gray-900 bottom-[0] flex flex-col items-center justify-start left-[0] p-[29px] sm:px-5 rounded w-[21%]">
                            <Img
                              className="h-[54px] my-[3px]"
                              src="images/img_computer.svg"
                              alt="computer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 items-center justify-between right-[1%] top-[0] w-[67%]">
                  <Text
                    className="text-base text-blue_gray-900 text-center"
                    size="txtCommissionerRegular16"
                  >
                    About Terms&Condition Services Blog
                  </Text>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[154px] text-center text-sm uppercase"
                    color="blue_gray_900"
                    variant="outline"
                  >
                    Contact
                  </Button>
                </div>
                <div className="absolute flex flex-col items-start justify-start left-[7%] top-[22%] w-[35%]">
                  <Text
                    className="leading-[80.00px] md:text-5xl text-7xl text-blue_gray-900_01 w-full"
                    size="txtCommissionerBold72"
                  >
                    <>Play Online Quiz &Win Cash Daily!</>
                  </Text>
                  <Text
                    className="mt-[17px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                    size="txtCommissionerRegular25"
                  >
                    Win up to ₦1000 monthly from QuizMe.
                  </Text>
                  <Line className="bg-blue_gray-100 h-[62px] md:ml-[0] ml-[311px] mt-1.5 w-px" />
                </div>
                <Img
                  className="absolute h-[124px] left-[0] object-cover top-[1%] w-[8%]"
                  src="images/img_group11.png"
                  alt="groupEleven"
                />
                <div className="absolute bg-gray-100 border border-blue_gray-100 border-solid bottom-[10%] flex flex-row gap-6 items-center justify-start left-[37%] px-3 rounded-lg w-[21%]">
                  <Text
                    className="text-base text-black-900"
                    size="txtCommissionerRegular16Black900"
                  >
                    +234
                  </Text>
                  <Line className="bg-blue_gray-100 h-[62px] w-px" />
                </div>
                <div className="absolute bg-gray-100 border border-blue_gray-100 border-solid bottom-[10%] flex flex-row items-center justify-start left-[4%] px-3 rounded-lg w-1/5">
                  <Text
                    className="text-base text-gray-300"
                    size="txtCommissionerRegular16Gray300"
                  >
                    DAY
                  </Text>
                  <Line className="bg-cyan-A200 h-[62px] ml-[26px] w-px" />
                  <Text
                    className="ml-[21px] text-base text-gray-300"
                    size="txtCommissionerRegular16Gray300"
                  >
                    MON
                  </Text>
                  <Line className="bg-cyan-A200 h-[62px] ml-4 w-px" />
                  <Text
                    className="ml-[26px] text-base text-gray-300"
                    size="txtCommissionerRegular16Gray300"
                  >
                    YEAR
                  </Text>
                </div>
              </div>
              <div className="absolute bg-gray-100 border border-blue_gray-100 border-solid bottom-[1%] flex flex-col items-end justify-start left-[9%] p-5 rounded-lg">
                <Text
                  className="mr-[121px] text-base text-red-A700"
                  size="txtCommissionerRegular16RedA700"
                >
                  ZIPCODE:{" "}
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[140px] justify-start left-[12%] w-[46%]">
              <div className="bg-gray-100 border border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-start justify-between p-[19px] rounded-lg w-full">
                <Text
                  className="ml-2 mt-0.5 text-base text-gray-300"
                  size="txtCommissionerRegular16Gray300"
                >
                  FIRST NAME
                </Text>
                <div className="h-5 md:h-[22px] mr-[117px] mt-0.5 relative w-[16%]">
                  <Text
                    className="m-auto text-base text-gray-300"
                    size="txtCommissionerRegular16Gray300"
                  >
                    LAST NAME
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-base text-gray-300 w-max"
                    size="txtCommissionerRegular16Gray300"
                  >
                    LAST NAME
                  </Text>
                </div>
              </div>
              <Line className="bg-cyan-A400 h-[62px] md:ml-[0] ml-[411px] mr-[218px] w-px" />
            </div>
          </div>
          <Text
            className="absolute bottom-[29%] left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900_01 text-center uppercase"
            size="txtCommissionerRegular35"
          >
            FULL NAME:{" "}
          </Text>
          <Text
            className="absolute bottom-[10%] left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900_01 text-center uppercase"
            size="txtCommissionerRegular35"
          >
            DOB:
          </Text>
          <div className="absolute bottom-[11%] flex flex-col justify-start left-[15%] w-[44%]">
            <Line className="bg-cyan-A400 h-[62px] md:ml-[0] ml-[305px] mr-[322px] w-[3px]" />
            <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[62px] mt-[3px] rounded-lg w-full"></div>
            <Text
              className="md:ml-[0] ml-[150px] mt-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900_01 text-center uppercase"
              size="txtCommissionerRegular35"
            >
              PHONE NO:
            </Text>
          </div>
          <Text
            className="absolute bottom-[0] left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900_01 text-center uppercase"
            size="txtCommissionerRegular35"
          >
            aDDRESS:
          </Text>
          <Text
            className="absolute bottom-[19%] left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900_01 text-center uppercase"
            size="txtCommissionerRegular35"
          >
            Email:{" "}
          </Text>
        </div>
        <div className="h-[8086px] md:px-5 relative w-full">
          <div className="flex flex-col gap-2 items-end justify-start mb-[undefinedpx] w-[59%] z-[1]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-evenly w-full">
              <Text
                className="sm:mt-0 mt-[23px] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900_01 text-center uppercase"
                size="txtCommissionerRegular35"
              >
                OCCUPATION:
              </Text>
              <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[62px] mb-1 rounded-lg w-[72%]"></div>
            </div>
            <Button className="cursor-pointer font-bold leading-[normal] min-w-[170px] mr-[3px] text-center text-sm uppercase">
              register now
            </Button>
          </div>
          <Text
            className="mb-[-7px] ml-auto mr-[41px] mt-[46px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center uppercase z-[1]"
            size="txtCommissionerMedium25"
          >
            <span className="text-black-900 font-commissioner font-medium">
              <>
                Number of Active Users Right Now
                <br />
              </>
            </span>
            <span className="md:text-[47px] sm:text-[41px] text-blue_gray-900_01 font-commissioner text-[55px] font-bold">
              20,000+
            </span>
          </Text>
          <div className="bg-white-A700 flex flex-col items-center justify-start m-auto pb-[681px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:h-[688px] h-[721px] relative w-full">
                <div className="absolute bg-blue_gray-900_01 flex flex-row inset-x-[0] items-center justify-start mx-auto outline outline-[0.5px] outline-white-A700 p-[31px] sm:px-5 top-[0] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[116px] mt-[88px] w-[85%]">
                    <Text
                      className="md:text-5xl text-[66px] text-white-A700"
                      size="txtCommissionerBold66"
                    >
                      How To Play
                    </Text>
                    <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-center ml-6 md:ml-[0] md:mt-0 mt-[105px] outline outline-[0.5px] outline-red-100 p-[17px] rounded-lg shadow-bs w-[32%] md:w-full">
                      <Img
                        className="h-[194px] md:h-auto mt-[3px] object-cover"
                        src="images/img_step2.png"
                        alt="stepTwo"
                      />
                      <div className="flex flex-col items-start justify-start mb-[31px] w-[82%] md:w-full">
                        <Line className="bg-gray-200 h-0.5 w-full" />
                        <Text
                          className="mt-10 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                          size="txtCommissionerBold24"
                        >
                          Step 2
                        </Text>
                        <Text
                          className="leading-[32.00px] mt-[17px] text-base text-blue_gray-900 w-full"
                          size="txtCommissionerRegular16"
                        >
                          Enter the Verification link sent to your email or
                          enter the Code and click Verify.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-2 items-center justify-center mb-16 md:ml-[0] ml-[30px] md:mt-0 mt-[41px] outline outline-[0.5px] outline-red-100 p-[15px] rounded-lg shadow-bs w-[32%] md:w-full">
                      <Img
                        className="h-[194px] md:h-auto mt-[7px] object-cover"
                        src="images/img_step2.png"
                        alt="stepThree"
                      />
                      <div className="flex flex-col items-start justify-start mb-[75px] w-[81%] md:w-full">
                        <Line className="bg-gray-200 h-0.5 w-full" />
                        <Text
                          className="mt-10 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                          size="txtCommissionerBold24"
                        >
                          Step 3
                        </Text>
                        <Text
                          className="mt-6 text-base text-blue_gray-900"
                          size="txtCommissionerRegular16"
                        >
                          Enter your Info and click Play Quiz .
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-3 items-center justify-center left-[10%] outline outline-[0.5px] outline-red-100 p-[15px] rounded-lg shadow-bs w-[26%]">
                  <div className="h-[194px] md:h-[197px] mt-[3px] relative w-[99%]">
                    <Img
                      className="h-[187px] m-auto object-cover w-[98%]"
                      src="images/img_rectangle2.png"
                      alt="rectangleTwo"
                    />
                    <Img
                      className="absolute h-[194px] inset-[0] justify-center m-auto object-cover"
                      src="images/img_step2.png"
                      alt="stepOne"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[33px] w-[81%] md:w-full">
                    <Line className="bg-gray-200 h-0.5 w-full" />
                    <Text
                      className="mt-10 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtCommissionerBold24"
                    >
                      Step 1
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[17px] text-base text-blue_gray-900 w-full"
                      size="txtCommissionerRegular16"
                    >
                      Enter your user information, Email address and Click
                      Register
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[82%]"
                orientation="horizontal"
              >
                <Comp className="bg-white-A700 flex flex-col gap-4 items-center justify-start sm:ml-[0] sm:mt-0 mt-32 outline outline-[0.5px] outline-red-100_01 p-3 rounded-lg shadow-bs w-full" />
                <div className="bg-white-A700 flex flex-col gap-[17px] items-center justify-start mb-[66px] sm:ml-[0] sm:mt-0 mt-[62px] outline outline-[0.5px] outline-red-100 p-[13px] rounded-lg shadow-bs w-full">
                  <Img
                    className="h-[196px]"
                    src="images/img_step5.svg"
                    alt="stepFive"
                  />
                  <div className="flex flex-col items-start justify-start mb-[75px] w-4/5 md:w-full">
                    <Line className="bg-gray-200 h-0.5 w-full" />
                    <Text
                      className="mt-10 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtCommissionerBold24"
                    >
                      Step 5
                    </Text>
                    <Text
                      className="mt-6 text-base text-blue_gray-900"
                      size="txtCommissionerRegular16"
                    >
                      A question will have four options
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[11px] items-center justify-start mb-32 sm:ml-[0] outline outline-[0.5px] outline-red-100 p-[11px] rounded-lg shadow-bs w-full">
                  <Img
                    className="h-[202px]"
                    src="images/img_step5.svg"
                    alt="stepSix"
                  />
                  <div className="flex flex-col items-start justify-start mb-[79px] w-[79%] md:w-full">
                    <Line className="bg-gray-200 h-0.5 w-full" />
                    <Text
                      className="mt-10 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtCommissionerBold24"
                    >
                      Step 6
                    </Text>
                    <Text
                      className="mt-[25px] text-base text-blue_gray-900"
                      size="txtCommissionerRegular16"
                    >
                      Click right Option.
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[167px] w-[82%] md:w-full">
                <Text
                  className="capitalize leading-[64.00px] md:text-5xl text-[66px] text-blue_gray-900_01"
                  size="txtCommissionerBold66Bluegray90001"
                >
                  lets sharp your preparation
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[170px] md:mt-0 mt-8 text-center text-sm uppercase"
                  color="blue_gray_900_01"
                  variant="outline"
                >
                  Explore All
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start mt-[62px] w-[82%] md:w-full">
                <div className="md:h-[417px] h-[433px] relative w-[66%] md:w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="bg-blue_gray-900_9a h-[416px] rounded w-full"></div>
                  </div>
                  <div className="absolute flex flex-col gap-[31px] items-start justify-start left-[5%] top-[15%]">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtCommissionerBold40"
                    >
                      BSC Model Test
                    </Text>
                    <Text
                      className="text-blue_gray-100_01 text-justify text-xl"
                      size="txtRubikRegular20"
                    >
                      we will be asking graduate question.
                    </Text>
                  </div>
                  <Img
                    className="absolute h-[417px] inset-y-[0] my-auto object-cover right-[0] w-[41%]"
                    src="images/img_rectangle3.png"
                    alt="rectangleThree"
                  />
                  <Text
                    className="absolute left-[10%] text-blue_gray-900_01 text-center text-sm top-[0] uppercase"
                    size="txtCommissionerBold14"
                  >
                    LET’s Start !
                  </Text>
                </div>
                <div className="bg-orange-50 flex flex-col gap-[53px] justify-start md:mt-0 mt-[17px] p-3 rounded shadow-bs w-[32%] md:w-full">
                  <Img
                    className="h-[206px] md:h-auto md:ml-[0] ml-[103px] mt-[35px] object-cover w-[206px]"
                    src="images/img_bitmap_206x206.png"
                    alt="bitmap_One"
                  />
                  <Text
                    className="mb-[49px] md:ml-[0] ml-[35px] md:text-4xl sm:text-[34px] text-[38px] text-blue_gray-900_01"
                    size="txtCommissionerBold38"
                  >
                    Primary Question
                  </Text>
                </div>
              </div>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start mt-8 w-[82%] md:w-full">
                <div className="h-[416px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="bg-gray-900_99 h-[416px] rounded w-full"></div>
                  </div>
                  <Text
                    className="absolute bottom-[16%] left-[0] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtCommissionerBold38WhiteA700"
                  >
                    CURRENT AFFAIRS
                  </Text>
                  <Img
                    className="absolute h-[206px] object-cover right-[13%] top-[12%] w-[206px]"
                    src="images/img_bitmap_1.png"
                    alt="bitmap_Two"
                  />
                </div>
                <div className="bg-orange-50 flex flex-col gap-12 items-center justify-start p-12 md:px-10 sm:px-5 rounded shadow-bs w-full">
                  <Img
                    className="h-[206px] md:h-auto object-cover w-[206px]"
                    src="images/img_bitmap_2.png"
                    alt="bitmap_Three"
                  />
                  <Text
                    className="mb-4 sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 text-center"
                    size="txtCommissionerBold40Bluegray90001"
                  >
                    General
                  </Text>
                </div>
                <div className="h-[416px] relative w-full">
                  <Img
                    className="absolute h-[206px] right-[7%] top-[12%] w-[206px]"
                    src="images/img_bitmap_blue_gray_900.svg"
                    alt="bitmap_Four"
                  />
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="bg-gray-900_99 h-[416px] rounded w-full"></div>
                  </div>
                  <Text
                    className="absolute bottom-[13%] left-[13%] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                    size="txtCommissionerBold45"
                  >
                    Technology
                  </Text>
                  <Img
                    className="absolute h-[206px] object-cover right-[13%] top-[12%] w-[206px]"
                    src="images/img_bitmap_3.png"
                    alt="bitmap_Five"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[154px] w-[82%] md:w-full">
                <Text
                  className="leading-[64.00px] md:text-5xl text-[66px] text-blue_gray-900_01"
                  size="txtCommissionerBold66Bluegray90001"
                >
                  Explore Our Quiz Categories
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[170px] text-center text-sm uppercase"
                  color="blue_gray_900_01"
                  variant="outline"
                >
                  Explore All
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start mt-[88px] w-[82%] md:w-full">
                <List
                  className="flex flex-col gap-8 mb-24 w-[41%]"
                  orientation="vertical"
                >
                  <div className="bg-orange-50 hover:cursor-pointer flex flex-col gap-5 items-start justify-start p-8 sm:px-5 rounded hover:shadow-bs w-full">
                    <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start p-3 rounded-[50%] w-[100px]">
                      <Img
                        className="h-[76px] md:h-auto rounded-[50%] w-[76px]"
                        src="images/img_oval.png"
                        alt="oval"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtCommissionerBold24"
                    >
                      Math
                    </Text>
                    <Text
                      className="leading-[32.00px] mb-[54px] text-base text-blue_gray-900_7f w-[94%] sm:w-full"
                      size="txtCommissionerRegular16Bluegray9007f"
                    >
                      Sky was cloudless and of a deep dark blue spectacle before
                      us was indeed{" "}
                    </Text>
                  </div>
                  <div className="bg-orange-50 hover:cursor-pointer flex flex-col gap-5 items-start justify-start p-8 sm:px-5 rounded hover:shadow-bs shadow-bs w-[58%] md:w-full">
                    <div className="bg-orange-50 flex flex-col h-[100px] items-center justify-start p-3 rounded-[50%] w-[100px]">
                      <Img
                        className="h-[75px] md:h-auto rounded-[50%] w-[75px]"
                        src="images/img_oval_75x75.png"
                        alt="oval"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtCommissionerBold24"
                    >
                      Science
                    </Text>
                    <Text
                      className="leading-[32.00px] mb-[22px] text-base text-blue_gray-900_7f w-full"
                      size="txtCommissionerRegular16Bluegray9007f"
                    >
                      Unorthographic life One day however a small line of blind
                      text.
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-8 items-start justify-start md:mt-0 mt-24 w-[58%] md:w-full">
                  <div className="bg-orange-50 flex flex-col items-start justify-start p-8 sm:px-5 rounded w-[56%] md:w-full">
                    <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start p-[11px] rounded-[50%] w-[100px]">
                      <Img
                        className="h-[78px] md:h-auto rounded-[50%] w-[78px]"
                        src="images/img_oval_78x78.png"
                        alt="oval_Three"
                      />
                    </div>
                    <Text
                      className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                      size="txtCommissionerBold24"
                    >
                      English
                    </Text>
                    <Text
                      className="leading-[32.00px] mb-[54px] mt-[17px] text-base text-blue_gray-900_7f w-[96%] sm:w-full"
                      size="txtCommissionerRegular16Bluegray9007f"
                    >
                      Even the all-powerful Pointing has no control about the
                      blind texts.
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-orange-50 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded hover:shadow-bs hover:w-full w-full">
                      <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start p-3 rounded-[50%] w-[100px]">
                        <Img
                          className="h-[75px] md:h-auto rounded-[50%] w-[75px]"
                          src="images/img_oval_1.png"
                          alt="oval"
                        />
                      </div>
                      <Text
                        className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                        size="txtCommissionerBold24"
                      >
                        Bangla
                      </Text>
                      <Text
                        className="leading-[32.00px] mb-[22px] mt-[17px] text-base text-blue_gray-900_7f w-full"
                        size="txtCommissionerRegular16Bluegray9007f"
                      >
                        However a small line of blind text by the name.
                      </Text>
                    </div>
                    <div className="bg-orange-50 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded hover:shadow-bs shadow-bs hover:w-full w-full">
                      <div className="bg-orange-50 flex flex-col h-[100px] items-center justify-start p-3.5 rounded-[50%] w-[100px]">
                        <Img
                          className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_oval_72x72.png"
                          alt="oval"
                        />
                      </div>
                      <Text
                        className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                        size="txtCommissionerBold24"
                      >
                        General Knowledge
                      </Text>
                      <Text
                        className="leading-[32.00px] mb-[22px] mt-[17px] text-base text-blue_gray-900_7f w-[96%] sm:w-full"
                        size="txtCommissionerRegular16Bluegray9007f"
                      >
                        Text by the name of Lorem Ipsum decided to leave for the
                        far World of Grammar.
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-[202px] p-[49px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col md:gap-10 gap-[109px] items-center justify-start mb-[34px] mt-[18px] w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <Img
                      className="h-8 md:mt-0 mt-[779px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[205px] justify-start mb-[104px] md:ml-[0] ml-[29px] md:mt-0 mt-11 w-[37%] md:w-full">
                      <div className="flex flex-col gap-[42px] items-start justify-start mr-[85px] w-[83%] md:w-full">
                        <div className="font-commissioner h-[159px] relative w-3/5">
                          <div className="border border-solid border-white-A700 h-11 mb-[-13.14px] rounded w-[72%] z-[1]"></div>
                          <div className="h-32 mt-auto mx-auto w-full">
                            <Text
                              className="leading-[64.00px] m-auto md:text-5xl text-[66px] text-white-A700"
                              size="txtCommissionerBold66"
                            >
                              <>
                                Winner <br />
                                Player
                              </>
                            </Text>
                            <a
                              href="javascript:"
                              className="absolute h-max inset-y-[0] left-[22%] my-auto text-center text-sm text-white-A700 uppercase"
                            >
                              <Text size="txtCommissionerBold14WhiteA700">
                                View all
                              </Text>
                            </a>
                          </div>
                        </div>
                        <Text
                          className="leading-[40.00px] text-blue_gray-100_01 text-xl w-full"
                          size="txtRubikRegular20"
                        >
                          Orci varius natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Etiam placerat tortor
                          commodo lectus laoreet venenatis.
                        </Text>
                      </div>
                      <Img
                        className="h-[88px] md:ml-[0] ml-[351px]"
                        src="images/img_group_deep_orange_100_88x134.svg"
                        alt="group_Two"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[76px] w-[53%] md:w-full">
                      <Img
                        className="h-[42px] md:ml-[0] ml-[407px] w-[42px]"
                        src="images/img_airplane_deep_orange_100_42x42.svg"
                        alt="airplane_Two"
                      />
                      <div className="border-[3px] border-deep_orange-100 border-solid h-[26px] md:ml-[0] ml-[136px] mt-5 rounded-[50%] w-[26px]"></div>
                      <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[19px] w-full">
                        <div className="md:h-[527px] h-[574px] sm:h-[780px] relative w-[94%] md:w-full">
                          <div className="absolute md:h-[527px] h-[574px] sm:h-[780px] inset-y-[0] my-auto right-[0] w-[95%] md:w-full">
                            <div className="absolute bottom-[0] md:h-[527px] h-[544px] sm:h-[780px] inset-x-[0] mx-auto w-full">
                              <div className="absolute flex flex-col gap-8 h-max inset-[0] justify-center m-auto w-full">
                                <div className="h-[272px] sm:h-[525px] relative w-full">
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[95%]">
                                    <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between w-full">
                                      <div className="bg-gray-900_01 flex flex-col items-center justify-center mb-12 p-[21px] sm:px-5 rounded shadow-bs">
                                        <Text
                                          className="mt-[34px] md:text-5xl text-[66px] text-center text-white-A700"
                                          size="txtCommissionerBold66"
                                        >
                                          Weekly
                                        </Text>
                                        <Text
                                          className="mb-[31px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                                          size="txtCommissionerRegular30"
                                        >
                                          Winner
                                        </Text>
                                      </div>
                                      <Img
                                        className="h-56 md:h-auto sm:mt-0 mt-12 object-cover rounded"
                                        src="images/img_unsplash3jmfencl24m.png"
                                        alt="unsplash3jmfenc"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[5%] h-[196px] outline outline-[0.5px] outline-white-A700 right-[0] rounded shadow-bs1 w-[44%]"></div>
                                </div>
                                <div className="bg-gray-900_01 flex flex-col items-center justify-center md:ml-[0] ml-[300px] mr-[33px] p-2 rounded shadow-bs">
                                  <Text
                                    className="mt-[49px] md:text-5xl text-[64px] text-center text-white-A700"
                                    size="txtCommissionerBold64"
                                  >
                                    Monthly
                                  </Text>
                                  <Text
                                    className="mb-11 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                                    size="txtCommissionerRegular30"
                                  >
                                    Winner
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[88px] left-[28%]"
                                src="images/img_group_deep_orange_100_88x134.svg"
                                alt="group_Three"
                              />
                            </div>
                            <Img
                              className="absolute h-[77px] inset-x-[0] mx-auto top-[0]"
                              src="images/img_group_deep_orange_100_77x133.svg"
                              alt="group_Four"
                            />
                            <Img
                              className="absolute bottom-[11%] h-56 left-[0] object-cover rounded w-[45%]"
                              src="images/img_unsplashgrymxaqdtp8.png"
                              alt="unsplashgrymxaq_One"
                            />
                          </div>
                          <div className="absolute bottom-[13%] h-[196px] left-[0] outline outline-[0.5px] outline-white-A700 rounded shadow-bs1 w-[41%]"></div>
                        </div>
                        <div className="border-[3px] border-deep_orange-100 border-solid h-[19px] rounded-[9px] w-[19px]"></div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-40 md:ml-[0] mt-[22px] w-3/4 md:w-full">
                        <div className="border-[3px] border-deep_orange-100 border-solid h-[65px] mb-[13px] sm:mt-0 mt-7 rounded-[32px] w-[65px]"></div>
                        <Img
                          className="h-[33px] sm:ml-[0] ml-[187px] w-[33px]"
                          src="images/img_airplane.svg"
                          alt="airplane_Three"
                        />
                        <Img
                          className="h-8 ml-48 sm:ml-[0] sm:mt-0 mt-[74px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                    <Text
                      className="leading-[64.00px] md:text-5xl text-[66px] text-white-A700"
                      size="txtCommissionerBold66"
                    >
                      <>
                        Check Latest
                        <br />
                        Articles
                      </>
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[67px] w-full"
                      orientation="horizontal"
                    >
                      <div className="h-[273px] relative w-full">
                        <Img
                          className="h-[272px] m-auto"
                          src="images/img_bitmap_deep_orange_100.svg"
                          alt="bitmap"
                        />
                        <Img
                          className="absolute h-[273px] inset-[0] justify-center m-auto object-cover rounded w-full"
                          src="images/img_unsplashhpjsku2uysu.png"
                          alt="unsplashhpjskuTwo"
                        />
                      </div>
                      <div className="h-[273px] relative w-full">
                        <Img
                          className="h-[272px] m-auto"
                          src="images/img_bitmap_deep_orange_100.svg"
                          alt="bitmap"
                        />
                        <Img
                          className="absolute h-[273px] inset-[0] justify-center m-auto object-cover rounded w-full"
                          src="images/img_unsplashsyto3xs06fu.png"
                          alt="unsplashsyto3xs"
                        />
                      </div>
                      <div className="h-[273px] relative w-full">
                        <Img
                          className="h-[272px] m-auto"
                          src="images/img_bitmap_deep_orange_100.svg"
                          alt="bitmap"
                        />
                        <Img
                          className="absolute h-[273px] inset-[0] justify-center m-auto object-cover rounded w-full"
                          src="images/img_unsplashvh3ijuoiwlu.png"
                          alt="unsplashvh3ijuo"
                        />
                      </div>
                    </List>
                    <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[37px] w-full">
                      <Text
                        className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtCommissionerBold24WhiteA700"
                      >
                        Even the all-powerful Pointing has no control about
                      </Text>
                      <Text
                        className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtCommissionerBold24WhiteA700"
                      >
                        Almost unorthographic life One day however a small line
                      </Text>
                      <Text
                        className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtCommissionerBold24WhiteA700"
                      >
                        Lorem Ipsum decided to leave for the far World of
                        Grammar
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between mt-[29px] w-[77%] md:w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtCommissionerRegular16WhiteA700"
                      >
                        16 Oct 2020
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtCommissionerRegular16WhiteA700"
                      >
                        14 Oct 2020
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtCommissionerRegular16WhiteA700"
                      >
                        10 Oct 2020
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[1065px] h-[1112px] mt-[72px] relative w-full">
                <div className="absolute bottom-[0] h-[993px] inset-x-[0] mx-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <a
                        href="javascript:"
                        className="text-blue_gray-900_01 text-center text-lg tracking-[3.00px] uppercase"
                      >
                        <Text size="txtCommissionerRegular18">Contact Us</Text>
                      </a>
                      <Text
                        className="mt-2.5 md:text-5xl text-[66px] text-blue_gray-900_01 text-center"
                        size="txtCommissionerBold66Bluegray90001"
                      >
                        Get In Touch
                      </Text>
                      <Text
                        className="leading-[32.00px] mt-[25px] text-2xl md:text-[22px] text-center text-gray-700 sm:text-xl w-[33%] sm:w-full"
                        size="txtCommissionerRegular24"
                      >
                        Lorem Ipsum decided to leave for the far World of
                        Grammar
                      </Text>
                      <div className="bg-blue_gray-900_01 h-[432px] mt-[352px] w-full"></div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 bottom-[15%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-20 md:px-10 sm:px-5 rounded shadow-bs2 w-[44%]">
                    <div className="flex flex-col gap-3 items-start justify-start mt-1 w-[79%] md:w-full">
                      <Text
                        className="text-blue_gray-900_02 text-xs uppercase"
                        size="txtCommissionerBold12"
                      >
                        Name
                      </Text>
                      <Input
                        name="rectangle_Five"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-gray-300 border-solid flex h-12 w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[79%] md:w-full">
                      <Text
                        className="text-blue_gray-900_02 text-xs uppercase"
                        size="txtCommissionerBold12"
                      >
                        Email
                      </Text>
                      <Input
                        name="rectangle_Six"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-gray-300 border-solid flex h-12 w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[79%] md:w-full">
                      <Text
                        className="text-blue_gray-900_02 text-xs uppercase"
                        size="txtCommissionerBold12"
                      >
                        Message
                      </Text>
                      <TextArea
                        className="bg-white-A700 border border-gray-300 border-solid rounded w-full"
                        name="rectangle_Seven"
                        placeholder=""
                        name="rectangle_Seven"
                        placeholder=""
                      ></TextArea>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[170px] mt-[31px] text-center text-sm uppercase"
                      color="blue_gray_900_01"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <Img
                  className="absolute h-[596px] inset-x-[0] mx-auto top-[0]"
                  src="images/img_group330.svg"
                  alt="group330"
                />
                <div className="absolute bottom-[4%] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[8%] w-4/5">
                  <div className="border-[3px] border-deep_orange-100 border-solid h-[19px] md:mt-0 mt-[83px] rounded-[9px] w-[19px]"></div>
                  <Img
                    className="h-[33px] md:ml-[0] ml-[161px] md:mt-0 mt-[248px] w-[33px]"
                    src="images/img_airplane.svg"
                    alt="airplane_Four"
                  />
                  <div className="border-[3px] border-deep_orange-100 border-solid h-[26px] md:ml-[0] ml-[434px] md:mt-0 mt-[296px] rounded-[50%] w-[26px]"></div>
                  <div className="border-[3px] border-deep_orange-100 border-solid h-[19px] md:ml-[0] ml-[343px] rounded-[9px] w-[19px]"></div>
                  <div className="md:h-[145px] h-[88px] mb-[57px] ml-2 md:ml-[0] md:mt-0 mt-[175px] relative rotate-[-41deg] w-[9%] md:w-full">
                    <div className="absolute h-[88px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="absolute h-[88px] inset-[0] justify-center m-auto"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="absolute bottom-[0] h-[15px] left-[13%]"
                        src="images/img_checkmark.svg"
                        alt="checkmark_One"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[13px] left-[24%]"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[21px] sm:px-5 w-full">
                <div className="flex flex-col md:gap-10 gap-[70px] justify-start mb-[37px] w-[87%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[91%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[67%] md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover"
                        src="images/img_group61.png"
                        alt="groupSixtyOne"
                      />
                      <div className="flex flex-col gap-5 items-center justify-start sm:mt-0 mt-[73px]">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-deep_orange-100 text-lg tracking-[3.00px] uppercase"
                            size="txtCommissionerRegular18Deeporange100"
                          >
                            Menu
                          </Text>
                          <Text
                            className="text-deep_orange-100 text-lg tracking-[3.00px] uppercase"
                            size="txtCommissionerRegular18Deeporange100"
                          >
                            Service
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                          <Text
                            className="leading-[32.00px] text-base text-white-A700"
                            size="txtCommissionerRegular16WhiteA700"
                          >
                            <>
                              About
                              <br />
                              Services
                              <br />
                              Blog
                              <br />
                              Contact
                            </>
                          </Text>
                          <Text
                            className="leading-[32.00px] text-base text-white-A700"
                            size="txtCommissionerRegular16WhiteA700"
                          >
                            <>
                              Planning
                              <br />
                              Managment
                              <br />
                              Strategy
                              <br />
                              Market
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-between md:mt-0 mt-[75px] w-[15%] md:w-full">
                      <Button
                        className="flex h-12 items-center justify-center w-12"
                        shape="circle"
                      >
                        <Img src="images/img_facebook.svg" alt="facebook" />
                      </Button>
                      <Button
                        className="flex h-12 items-center justify-center w-12"
                        shape="circle"
                      >
                        <Img src="images/img_twitter.svg" alt="twitter" />
                      </Button>
                      <Button
                        className="flex h-12 items-center justify-center w-12"
                        shape="circle"
                      >
                        <Img
                          className="h-4"
                          src="images/img_camera.svg"
                          alt="camera"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[47px] items-center justify-start md:ml-[0] ml-[42px] w-[97%] md:w-full">
                    <Line className="bg-blue_gray-800 h-px w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700_80"
                        size="txtCommissionerRegular16WhiteA70080"
                      >
                        Copyright © 2022 Quizbaj. All Rights Reserved.
                      </Text>
                      <a
                        href="javascript:"
                        className="sm:ml-[0] ml-[575px] text-base text-right text-white-A700"
                      >
                        <Text size="txtCommissionerRegular16WhiteA700">
                          Privacy Policy
                        </Text>
                      </a>
                      <Text
                        className="sm:ml-[0] ml-[63px] text-base text-right text-white-A700"
                        size="txtCommissionerRegular16WhiteA700"
                      >
                        Terms of Use
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFormPagePage;
