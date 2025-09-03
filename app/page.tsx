import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import ProjectModal from "@/components/project-modal"
import SkillBadge from "@/components/skill-badge"


// types.ts
export interface Experience {
  id: string;
  title: string;
  role: string;
  location?: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  image: string;
  url: string;
}




  export const experiences: Experience[] = [
  {
    id: "coconut-africa",
    title: "Coconut Africa",
    role: "Lead Engineer",
    location: "Lagos, Nigeria",
    period: "Feb. 2025 – Present",
    description:
      "Led both frontend and backend development for a logistics and fintech platform based in Lagos, Nigeria.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn",
      "TailwindCSS",
      "Zoho-mail",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    responsibilities: [
      "Implemented full authentication system integrated with backend API, including signup, login, password recovery, and 2FA for secure access.",
      "Built the shipping module enabling users to book global shipments from Nigeria using third-party APIs like DHL and Terminal.",
      "Collaborated with backend developers to implement banking features including virtual bank account creation, wallet deposits, service-based wallet deductions, transaction charges and more.",
      "Integrated two-factor authentication (2FA), requiring email verification for signup, password reset, and a dedicated passcode for authorizing banking transactions.",
      "Designed and implemented a dynamic email notification system, including coded email templates using Zoho Mail API.",
    ],
    image: "/p-coconut.png?height=400&width=600",
    url: "https://withcoconut.com/",
  },
  {
    id: "sparkhq",
    title: "SPARKHQ",
    role: "Full-Stack Developer",
    location: "UK (Remote)",
    period: "May 2023 – Feb. 2025",
    description:
      "Contributed to building a scalable full stack platform with strong focus on content management and user authentication.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Firebase",
      "SANITY.IO",
      "GraphQL",
      "SendGrid API",
    ],
    responsibilities: [
      "Built a comprehensive full stack application with React and Next.js frontend, and a Node.js and Express backend.",
      "Implemented email interaction functionalities using the SendGrid API.",
      "Utilized Firebase for user authentication and data storage, ensuring secure and efficient handling of user information.",
      "Employed SANITY.IO headless CMS and GraphQL for storing and managing startup data, facilitating easy updates and scalability.",
    ],
    image: "/p-spark.png?height=400&width=600",
    url: "https://www.sparkhq.io/",
  },
  {
    id: "throve",
    title: "THROVE",
    role: "Front-End Developer",
    location: "UK (Remote)",
    period: "Sept. 2022 – May 2023",
    description:
      "Focused on building responsive frontend experiences and automated email systems for a UK-based platform.",
    technologies: ["React", "Next.js", "SCSS", "EmailJS"],
    responsibilities: [
      "Built an interactive and responsive multi-page web application utilizing Next.js and React.",
      "Designed and implemented an automated email response system using EmailJS.",
      "Styled the application using SCSS, leveraging variables, mixins, and nested rules for scalability.",
    ],
    image: "/p-throve.png?height=400&width=600",
    url: "https://throve.netlify.app/",
  },
  {
    id: "collaks-po",
    title: "COLLAKS P&O",
    role: "Website Specialist",
    location: "Lagos, Nigeria",
    period: "Dec. 2019 – March 2022",
    description:
      "Developed and maintained the healthcare provider’s website with a focus on accessibility and design consistency.",
    technologies: [
      "React.js",
      "Next.js",
      "SCSS",
      "Styled-Components",
      "EmailJS",
      "Figma",
      "Netlify",
    ],
    responsibilities: [
      "Developed a full-featured website for a healthcare provider specializing in prosthetics and orthotics.",
      "Utilized Figma to design an intuitive and visually appealing UI.",
      "Employed SCSS and Styled-Components for a maintainable and consistent design system.",
    ],
    image: "/p-collaks.png?height=400&width=600",
    url: "https://collaks.com/",
  },
  {
    id: "idealab-academy",
    title: "IDEALAB Academy",
    role: "Website Specialist",
    period: "—",
    description:
      "Built a website supporting study abroad applications, enabling smooth user experience and easy updates.",
    technologies: [
      "React.js",
      "Next.js",
      "SCSS",
      "Styled-Components",
      "EmailJS",
      "Figma",
      "Netlify",
    ],
    responsibilities: [
      "Developed a comprehensive website to assist individuals aspiring to study abroad.",
      "Utilized React.js and Next.js for a dynamic and responsive experience.",
    ],
    image: "/p-idealab.png?height=400&width=600",
    url: "https://study.idealabacademy.org/",
  },

  {
    id: "mawshal-proverbs",
    title: "Mawshal Proverbs",
    role: "Full Stack Developer",
    period: "—",
    description:
      "Built an eCommerce application for managing and purchasing artworks with a custom CMS.",
    technologies: [
      "React.js",
      "Next.js",
      "SCSS",
      "Styled-Components",
      "Redux",
      "Figma",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    responsibilities: [
      "Developed an eCommerce application for uploading, listing, and purchasing artworks.",
      "Built product listing, detail pages, checkout with Paystack, and a custom CMS for admin product management.",
    ],
    image: "/p-mawshal.png?height=400&width=600",
    url: "https://marshalproverbs.netlify.app/",
  },

];


export default function Home() {







  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex gap-4 mb-2">
              <div className="text-sm font-medium">
                <span className="text-neutral-500">*</span>
                <span className="ml-1">200+</span>
                <div className="text-xs text-neutral-500">Projects completed</div>
              </div>
              <div className="text-sm font-medium">
                <span className="text-neutral-500">*</span>
                <span className="ml-1">6+</span>
                <div className="text-xs text-neutral-500">Years experience</div>
              </div>
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter mb-6">Hello</h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mb-8">
            I'm Israel Eduviere, a Fullstack Developer specializing in creating high-performance and user-friendly web
            applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="#projects">View my work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-medium mb-4">About Me</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-5xl font-bold mb-2">6+</div>
                <p className="text-neutral-600">Years of experience in web development</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-neutral-700 mb-6">
                I am a highly motivated and experienced Fullstack Developer with over 6 years of experience in
                developing high-performance and user-friendly web applications. I have a passion for creating flexible,
                intuitive, and efficient web solutions that are tailored to each client's needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-sm">1</div>
                  <div>
                    <h3 className="font-medium">Frontend Expertise</h3>
                    <p className="text-neutral-600 text-sm">Specialized in React, Next.js, and modern UI frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-sm">2</div>
                  <div>
                    <h3 className="font-medium">Backend Development</h3>
                    <p className="text-neutral-600 text-sm">Proficient with Node.js, Express, and MongoDB</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-sm">3</div>
                  <div>
                    <h3 className="font-medium">UI/UX Design</h3>
                    <p className="text-neutral-600 text-sm">Background in creating intuitive user experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-sm">4</div>
                  <div>
                    <h3 className="font-medium">Full Project Lifecycle</h3>
                    <p className="text-neutral-600 text-sm">From concept to deployment and maintenance</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge>TypeScript</SkillBadge>
                  <SkillBadge>JavaScript</SkillBadge>
                  <SkillBadge>React</SkillBadge>
                  <SkillBadge>Next.js</SkillBadge>
                  <SkillBadge>Node.js</SkillBadge>
                  <SkillBadge>Express</SkillBadge>
                  <SkillBadge>MongoDB</SkillBadge>
                  <SkillBadge>TailwindCSS</SkillBadge>
                  <SkillBadge>GraphQL</SkillBadge>
                  <SkillBadge>Firebase</SkillBadge>
                  <SkillBadge>Python</SkillBadge>
                  <SkillBadge>Figma</SkillBadge>
                  <SkillBadge>Vercel</SkillBadge>
                  <SkillBadge>Netlify</SkillBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8 flex items-center">
            <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-light mb-12">Latest Works</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {experiences.map(exp => (
              <ProjectCard
                key={exp.id}
                title={exp.title}
                description={`${exp.role} - ${exp.description}`}
                tags={exp.technologies}
                imagePath={exp.image}
                projectId={exp.id}
                url={exp.url}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="rounded-full">
              View more <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8 flex items-center">
            <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-light mb-12">Explore My Design Journey</h3>

          <ExperienceTimeline />
        </div>
      </section> */}

      {/* Blog/Insights Section */}
      {/* <section id="insights" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8 flex items-center">
            <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Blog
          </h2>
          <h3 className="text-3xl md:text-4xl font-light mb-12">Design Insights & Trends</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-neutral-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-neutral-200 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3">Frontend</Badge>
                  <h4 className="text-lg font-medium mb-2">Optimizing React Performance with Modern Techniques</h4>
                  <p className="text-neutral-600 text-sm mb-4">
                    Exploring the latest strategies to boost React application performance.
                  </p>
                  <Link href="#" className="text-sm font-medium flex items-center">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-neutral-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-200 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3">Design</Badge>
                  <h4 className="text-lg font-medium mb-2">Mastering Minimalist Design and Usability</h4>
                  <p className="text-neutral-600 text-sm mb-4">
                    How to create clean, functional interfaces that users love.
                  </p>
                  <Link href="#" className="text-sm font-medium flex items-center">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-neutral-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-200 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3">Development</Badge>
                  <h4 className="text-lg font-medium mb-2">Building Scalable APIs with Node.js and Express</h4>
                  <p className="text-neutral-600 text-sm mb-4">Best practices for creating robust backend services.</p>
                  <Link href="#" className="text-sm font-medium flex items-center">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Got a Vision? Let's Bring it to Life!</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            I'm always excited to collaborate on new projects. Whether you have a detailed plan or just an idea, let's
            discuss how we can create something amazing together.
          </p>
          <Button className="rounded-full bg-white text-black hover:bg-neutral-100" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-8 flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-light mb-6">Let's Connect</h3>
                <p className="text-neutral-600 mb-8">
                  Feel free to reach out for collaborations, project inquiries, or just to say hello!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:Eduviereisrael@gmail.com" className="text-neutral-800 hover:underline">
                      Eduviereisrael@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 flex items-center justify-center">📱</div>
                    <span className="text-neutral-800">08081095271</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    ></textarea>
                  </div>
                  <Button className="w-full rounded-md">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-400">© {new Date().getFullYear()} Israel Eduviere. All rights reserved.</p>
            </div>
            <div className="flex items-center">
              <a href="mailto:hello@dnova.com" className="text-white hover:text-neutral-300">
                Eduviereisrael@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modals - These will be shown when a project card is clicked */}
      {experiences.map(exp => (
        <ProjectModal
          key={exp.id}
          id={exp.id}
          title={exp.title}
          role={exp.role}
          period={exp.period}
          description={exp.description}
          technologies={exp.technologies}
          responsibilities={exp.responsibilities}
          images={[exp.image]}
          url={exp.url}
        />
      ))}
    </div>
  )
}
