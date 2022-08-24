import { t } from 'i18next';
import React from 'react'
import {Link} from "react-router-dom"

function Signup() {
  return (
  <>
  
  <div
      class="min-h-screen flex flex-col items-center justify-center"
    >
      <div
        class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          {t('Join us Now')}
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          {t('Enter your credentials to get access account')}
        </div>

        <div class="mt-10">
          <form action="#">
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >{t('Name')}:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABqklEQVRIie3Uv0sbcRjH8fdzF3Ne6OBQEHEQKWmpCu1U+x+4BNx1VidBCx1al3PoUOzm1MxNl9LBwaX/gbgE/IVEcBLc1KInZ5J7uqRWkrY+134RhHzG5z48rzvu7gvd3FEkS7k2T6BhMKeiU8BYa7wtSEXipFxcJXEO7y+FgzSa68CzP1Sq5PzSk3eXR87g2jxBWshv/AW9xr346qXlyT0LrGEwZ0ABnqdhMGPZaYNFpy09AIxdEwyMmOFfH50T+EEG2NS1wucZ4O8u4d0MsKlrggX5ZGZVKu7gOCkDVUO12igkZWdwcZWEnF+6Ba+S80ujEVeWnZnO6p2IfC4OZlv/6hiAKluCfG4UkrIV7eZOY3rHGuEdxD0vUpFJ0HGQp0Bf6/IJ6B4iGyK6VgzqmxKR/he8+7Yw4Dfrr4EpkH7LTQLHqFYamv8wunJxnAk+XKAv6e1ZFpUZIDSC7bkU9KNPPXr0nrNb4b03wWNP9RvK0D+C7TlspjIxspLUbg47DhC/qV8dogDDvqdf2ocdsAoPHaI/07Hzd0fmInDqShQ4UXjlal839yc/ACvifEyybWX6AAAAAElFTkSuQmCC"></img>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-amber-600
                  "
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >{t('E-Mail Address')}:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACqUlEQVRIie2TP2jdVRiGn/ec03ubGN3agEVSWlqbQdxiiQpdCpJFndJB6CB0KU0HoTe6WISUJLiVNoJmahRd1EWslCol5k+HTKJpAqZCQqCgQ4drk9+95/c6NIVabpMmHfWdDud7z/Oecz4++F9bSPO1yksBrgLPPwVntYQ3ukeKXx4thCIXS4a5p4BjmCtysdSqFqpp14WU4mmLofve7bEthlKKp9virqGWAbIGcrOci7m8ZtEP1J8QvoZ9MmZ/nRt5yuhsy4CNi+wpQ/gB/KwzvcDtLeArtl+XlMugnxEvPM4YHlpXZY2T/G6O6VVLN1odsHQjx9QTxDuGz4G2jdJfWwUAIGsg5saVnNMJpMv/qqGxSkj9MTeuGJ1FmkScsNO+w0tFZ6sALdQqj2vsUo68mUr32rog+YNm0HTMfAt0WT5j4tVQ+n3kPqATuGP0naXh7uG1P1q+4CEdiJmZslQ9tBUHXHIvZqaBg5bPRMJScJ41XgmljjXbio5Q6pjwanC+uXiuenyrF7SWNOmmTirmmWDeOjTamH3UMl9LvQF9k5uxJ20LDoAvKTBo69Kh0WL2t/d2d8WUx0FHwTM2Xx4ZaYwvDFbGQvTgZl/UGl+mSeS+aH0BEFMex7q+lotO0E+SPgOIaAK5LwAr2wnI7X//Cewtnllfvr+jV5rtxcWXP6ZuFxcf+A7+vn5bsC+ATmGWn5Bff+4uEXOnUq9uDJdn073KwK/n6QhUBgAWaum1xf2pF7Oq7dz+gW7Vqp8Ir744Uny00YNPQUcxUwr+ytaHmOigUzsKmB/cvT843yzx290jzenNvDsKAFg8Vz1ulRNIYxFNuL6+3Oyodim7nxCmjgyv/QibD9qmOjy6fi03Y49LdTbt62V75W4o/b3kPZTh1k65/0H9AzcdKJf+uf5MAAAAAElFTkSuQmCC"></img>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-amber-600
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >{t('Password')}:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span className="max-w-xs">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3SvU7CYBTG8f95ScDEOrjgIE6mCvEmdEad3N3Y2Ag4sgk66CiDXoCTBhPjPehoYggbLA7GxI+ENtDjAAMRtCVUB+2ztHlz+vx6msJ/i0wy3CxYyW7MzQtsAjboO3CPmLqZcU7tMi+hww/F+I4IZ8Dc+Al99DC7mapzE6TPTICeD9AL43nrnZ5rdXqu5YnZAC5BFgx61SglskE6fTduFqxkL+Y2gTkRKa5UnMOxL7cXL4lSEXjuGdfO7PP0Xa/vxt2Ym2ew6VcoQLriVhXqCvNG43m/Xl9YYAvAeN6x3yxqjvpXtqeGgWUAd7Z75z/auR3c2GHAFsBamTe/wfQBr8PPTAv/SEb+6kYpkVW0BiyGZLRBcqtV53r4cGRjRU9CRAFSqNY+H4771KkQ0X6EpSDwrySCIziCI/hvwO3QFaUVAJZcqLjSUiO50PqiTJoPBxxhfWs6wfIAAAAASUVORK5CYII="></img>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-amber-600
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div class="flex w-full">
              <button
                type="submit"
                class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-amber-600
                  hover:bg-amber-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span class="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="#d97706"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            >{t('You have an account')}
            <a
              href="#"
              class="text-xs ml-2 text-amber-600 font-semibold"
              > <Link to="/Home">{t('Login here')}</Link> </a
            ></span
          >
        </a>
      </div>
    </div>

  </>
    )
}

export default Signup;