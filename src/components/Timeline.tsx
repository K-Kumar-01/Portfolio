import React from "react";

type TimelineItem = {
  company: string;
  logo: string;
  role: string;
  duration: string;
  description?: string;
  keyFocus: string;
};

const timelineItems: TimelineItem[] = [
  {
    company: "AQR Capital Management",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAXVBMVEX///8Ap+7///4Aqe4Are8Aq+8Ape08t++u3Pba7/qU0vT3/P3R6/n7//7P6fmi1/Vev/HB5Pd4yPI0tO/p9vuCzPRqw/Ense9QvPC64fjj8/sAoezw+fzH5/eMz/RCr7Z/AAADTElEQVRIiZ1XCZaCMAwlTVp2WSoUFL3/MSddGEGLOpPncynZ85vEJImQyLOh1YbI6HbIchHjiUh1Iyjw5D9x7D7L1gUCKtNnp8tS18vllPWkEGRRvrdWAIJpzvvTc6PZbvHG6o1QTVWMoZoA6XZkrgfU1ZHSSqPqo0ZLjdC8cceGoSORngkpPxazlDPL+fnwjKjr93Kcco3ySbIknL6os0iRdt4KjforfLDkjrFH+uinp5qgf/y6KfiQlwflSv3WUxAW38olSYO0OlvAdwEG0hDMlKAO8RKjCsBntsDpL3JJMvnIhIQ/GWSTStrQOjCxCLvRaKOLF4hZ0tDx+4hNRKm5NiW3kPQ6RLQ2OLKnAK9am7WwYlTm9UacAbigYMLPcllZZoVZ+CoM+kjKhWllINabrRASqJQICukR9ow42E9jG5cKSOkhSwYIym9IOPtjlI+wayJlY0lJAqKEuz3MYEhaOHmOVkpyBa2RttDlc2smlT172xJYX07QcmovPkKQA7o8VUC4Scgd5eQFnVvO/AU0+76EFMsA9hlJbmrAoLYRpziWy3mSzuICxAnyN1FjnwwO+BkSbXKfBUGOEYCUa6+1YkHlBHOFVZKjDbgDkptr3UjSa3IogMUKBlfZGM8YkqOrxhYTvUQbXcrvHYa8W1d9cgQrs/PFpUWvdXFkyN06l5xJ+hZjk+PLwWXu8jy/Och0YA0HykGmSbCYXBT2azk8AFryTSAl5hITPnwdpa9XShZAd8I8AMBDTiS+AMK9avPbZTsIvclzhFMLuVytIN9Q3V5bx9Op6FwwDC3hsfBEotPqPmepusf67VlZGIwQucjWaqGoibdpd5Ft63h+cLlneZdOh5PfuNYh8KVZZTz10TTVwdyvwGP5tT3mV4aXRMT0Prv7suweT6Ejl/Bicq6XuTfKCgNp2I/wClRwpYjPOHHJRm4YiubdU+5C66QRFOuQ/lGZX56U8v38/X5T6l9j7i+DlWf+ZrB+P8oTLfeMrCj9z/LA8JPR7WdPkXXFLkjyXwuSXckA3q4ChTpwSgzq0xJ49PBGAFNU1K6d8mjtTPyGqCKLrvmw6DKVhbRL8na1NvB5tXZWeZnf7fJ2mf8oFWTXvw+UHv59+AGtFCVTpjb0swAAAABJRU5ErkJggg==",
    role: "Software Developer | Software Intern",
    duration: "Jul 2024 - Present | May 2023- Jul 2023",
    description:
      "Working on high-performance financial systems and data migration.",
    keyFocus: "Python, AWS, Flask, Pandas, PostgreSQL, MSSQL",
  },
  {
    company: "TurboDocx",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTVARTo6Iys/Tz84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3NCs3NzctNzc3Nzc3ODUzNzUyMDUtNTc1OC81Ky01NC0tNjcuNi01LS0tNS8vLf/AABEIACAAIAMBEQACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAEBQcDAf/EACYQAAIBAwMEAQUAAAAAAAAAAAECAwAEBQYREiEiMVGxFGFxgZH/xAAZAQACAwEAAAAAAAAAAAAAAAADBQABAgb/xAAfEQADAAICAgMAAAAAAAAAAAAAAQIDEQRxM2EhIjL/2gAMAwEAAhEDEQA/ANXaupEZsmHydxEssGPuZI3G6ssRII9igVyMUvToKsORraQtvLee1laK5hkikU7FXUgg7A/BH9FanJNrcvZVTU/DQDIahQyL0QyVjTNyI8FjEdSFa2TZ9+niuezreWu2NsT+k9ITavxoubDLTK8bIN7sFoSWRljVSFbkOhCej5+1b49uMk66M5pVQyVyGnQuDC9aMlawbCTTOJhUcnNvH+ulIcvlp+2Ncfjno5nm4aXzMMg4yfSSn89pqsfll+0S/wAV0yKu1PBYEc6soOg1Dl7WJIrfJXEcaLxRVI7R68UCuNip7aDLNkS0mZ3WosxcxSRXGSuJI5FKurEdwPkeKpcfFL2kR5ra02J3ejAz/9k=",
    role: "Software Developer",
    duration: "Jan 2024 - Jun 2024",
    description:
      "Built intelligent document processing systems with AI integration.",
    keyFocus:
      "React, TypeScript, OpenAI, LangChain, Document Processing, OOXML",
  },
  {
    company: "Cloud Native Computing Foundation",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX////T4/+jx//H7//M9P+/2P8AfP8AgP8Aef9/2/+R6v+N6f+T7f9sqv8Ahv8AhP+H3/+T6v8Agv9zrf8Qif8/mP84k/+l7f8gjf9KnP/1/f+w7/+Gt/94sv/s+/+16f+48f92r/+nyf8dgGQQAAAA7ElEQVR4AaXRBQ7DQAxEUZcC3jAz3f+QHcthqaJ+4eiFQ//0eGqvt7bOD0lPy5Ycl43k6bR8RTsIwjC0ojhm5NkYQZCkG2Z5nhcRcykVGNWBYU2oYdPSWpfcULT8hap3dKycbto769O+3ChqNh2GhtDouiNJb46ZN0Vy7sQ8KZqYzUlNCTQ7ctmelKEXpNIYVX2qic8IHehQjjdkIFRR9UADRA0dGrOg/rKc0Pm+nWXdPh+URfXzzQce+hOpxZVvGFR936fjhJi9GSMPDgySJHEiRnHs2RjBjlYiWYJIENmKn3SW/HHSdKYL/dEXfBgYl9aEUckAAAAASUVORK5CYII=",
    role: "Software Developer",
    duration: "Mar 2022 - May 2022",
    description:
      "Contributed to parser-development for SQL functions support in Vitess",
    keyFocus: "Go, SQL, Parser, Yacc",
  },
  {
    company: "TrueFoundry",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVHcEx9weeZz++W1vlQb558xvBGYqxtxfgeAJldaL4oDq9OJvBpxPhLG+w1FMOQ0eVIIuAdAJhqxfllvO5rx/tPJ/OQzvGz3fe03/geAJppw/ZSKPlTKfxtxfdUKP8fAJ1tyv8oAM6Z2/+55f8cAJhuz/8jAMu96P8WAJppyP+/7f9al/E/Gd+T1P1fTv9LBvyd4v9IIO+45P6ItP8qEqhgqvUAAJWbvOk4FsqE0v8xEr1alfExJ6W24P1opvk/VNw1NtVDQq+uA4jfAAAAHnRSTlMAL2XvCXEVvKr9UIGyZpU8KbLRR+yki4mtyI/u38bEPS0tAAAA+klEQVQoka3S2XKCMACFYUS04jLazdotCxACCNZ96Wrf/6WahJCEpTO96H8V5rvJhGNZf6jT1efJoEyZ503l2bkFAIwU2W2Pl9n8YwBEj31B45x47fEIqJ4mDJ9PhS03C23geMnwAqGTpBdNKQx6OcYoW2YmrWAAoUTWp0lbRgaSeZgW9iqojDjnYyDNwLcQs1YpLKiOWNO/INppjKL3CpL4KxQY7d0PNyoj4905xMH++5AkdUSEzPH2kFBfIn/4DlIRRKnvFyj+qDNUGnPLsefIKbSuqnhvTMq6vjGQuv3q/BSu7YZ1Pghc3zVvtzuM6cxpNn6z1q9U6wfhmEFyGn+OhwAAAABJRU5ErkJggg==",
    role: "Backend Developer Intern",
    duration: "Sep 2021 - Nov 2021",
    description:
      "Developed tailored serverless configs and Open Source Secrets Management CLI",
    keyFocus: "CLI, Commander, Python, Jinja, Serverless Configs, YAML",
  },
  {
    company: "Google Summer of Code",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEX////83a77zYb94bj5owD5pQD70ZD5qwD+8Nz83Kv81Zr7y4D96cz5pwD5qAD6rQDvlADogQDleQDhbwDjcwDzngDjdADoklPmgzL6w2jhaQD77uTroW3tjQDnikHhZAD99vHxwJ/lfyf66t/usor0zbX6wF/njknkexr6vVfS1gIXAAABEElEQVR4AazQB5KDMAxAUZvgKM0WQUIhdNh+/wuu0htMzadp5tHNm7LRtM1iN582gBFdLK21KzXVtV0ul5s7XMbe+wB4KOgYr+/QelBJtmm6TRAAQvSI6FJijTjDZ0RHLCLEumX4gKuAKQsL7XJSDWH/8A0JCeVUlFVeCNfo5neGW6bcNIVpu77gFOGiVr9P7zqYqqg+CjKfRAgXjdwRuezbr75ozO6I/ltJm7vDbZnM0P0UXUUiCF5f6aKYkHDxa1ohHWpUu7YOKCzCvywaefh7/EMZierREnz5fRkzK7MaPCMg1CmR1B7hEZdx0PAY6OTWd7hZR1G0d6D5Px3Xszu8fu/d973qtKn+T41KaRwAnn0V0Rdg370AAAAASUVORK5CYII=",
    role: "Software Developer",
    duration: "May 2021 - Aug 2021",
    description:
      "Contributed to open-source projects simplifying document transformation.",
    keyFocus: "React, OOXML, JSON, Word Addin,Document Processing, CLI",
  },
];

export default function Timeline() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Development Experience
        </h2>

        <div className="relative">
          <div className="absolute left-16 top-0 h-full w-px bg-gray-200 dark:bg-gray-700 sm:left-[7.5rem]" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="ml-28 sm:ml-44">
                  <div className="flex items-center gap-6">
                    <div className="relative -ml-20 h-12 w-12 overflow-hidden rounded-lg sm:-ml-24">
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.company}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-300">
                    <span>{item.duration}</span>
                  </div>

                  {item.description && (
                    <p className="mt-4 text-gray-600 dark:text-gray-200">
                      {item.description}
                    </p>
                  )}

                  {/* Key Focus */}
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Key Focus:
                    </span>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                      {item.keyFocus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
