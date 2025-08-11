import {
  Laptop,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Tablet,
  Code,
  Palette,
  Music,
  BookOpen,
  FlaskConical,
  Construction,
  Calculator,
  Globe,
  Puzzle,
  FileText,
  Camera,
  FileSliders,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Technology Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Technologies in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering digital literacy, innovation, and creative expression
                through interactive tools
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/1399040809/photo/elementary-students-using-technology-at-school.jpg?s=612x612&w=0&k=20&c=9jAHKkESRPZKS4DILwFICFB_u7_gxcrr7h_rAC5A70k="
                  alt="Children using tablets and computers"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-cyan-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Laptop className="w-12 h-12 text-cyan-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Tablet className="w-10 h-10 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of
                  Technologies in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Technologies provide early learners with tools to express
                  ideas, explore concepts, and solve problems creatively. Using
                  digital devices, interactive media, and age-appropriate
                  software can enhance children’s engagement and motivation
                  while developing critical thinking and collaboration skills.
                  The EYLF (ACECQA, 2022) encourages educators to integrate
                  technologies meaningfully, helping children to become
                  confident and creative users of digital tools. Technologies
                  support diverse learning styles and extend opportunities for
                  self-directed exploration and communication (National
                  Association for the Education of Young Children & Fred Rogers
                  Centre, 2012).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Reggio Emilia philosophy regards technology as one of the
                  “hundred languages” through which children express themselves
                  (Edwards, Gandini & Forman, 2012). Papert’s (1980)
                  constructionism theory highlights learning through making and
                  digital creation, empowering children to construct knowledge
                  by interacting with technology. Vygotsky’s (1978) emphasis on
                  social interaction applies as children collaborate and share
                  ideas using digital media. These approaches emphasize the
                  educator’s role in guiding inquiry and supporting children to
                  experiment and create in safe, stimulating digital
                  environments.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Code className="w-6 h-6 mr-3" /> Resources, Materials, and
                  Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Early childhood educators can provide tablets or computers
                  loaded with creativity apps such as drawing programs,
                  storytelling platforms, and simple coding tools like
                  ScratchJr. Interactive whiteboards, digital cameras, and
                  recording devices enable children to document and share their
                  ideas. Open-ended digital tools encourage experimentation,
                  problem-solving, and reflection. Educators enhance learning by
                  scaffolding technology use, prompting children’s curiosity,
                  and linking digital experiences with hands-on activities
                  (Howard & Mayesky, 2022).
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Tablets & Computers
                  </span>
                  <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Drawing Apps
                  </span>
                  <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Storytelling Platforms
                  </span>
                  <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Coding Tools
                  </span>
                  <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Digital Cameras
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Digital Photo Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using a tablet, infants take photos of their
                        environment, exploring cause and effect and developing
                        sensory awareness (National Association for the
                        Education of Young Children, 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Interactive Storytime
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Educators use digital storybooks with sound and
                        animation to engage babies in listening and visual
                        exploration (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Drawing Apps
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Toddlers use simple finger-painting apps to express
                        creativity and experiment with colours and shapes
                        (Edwards et al., 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Voice Recording
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children record their voices telling stories or singing
                        songs, developing oral language skills and confidence
                        (National Association for the Education of Young
                        Children, 2012).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Digital Story Creation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children use apps like Puppet Pals or Toontastic to
                        create and narrate their own stories, enhancing literacy
                        and imagination (Howard & Mayesky, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Coding Games
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Basic coding apps encourage logical thinking and
                        problem-solving while allowing children to create
                        animations or simple games (Papert, 1980).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Multimedia Presentations
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children compile images, text, and audio to present
                        projects digitally, developing communication and
                        creative technology skills (Edwards et al., 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Robotics and Programming
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using beginner robotics kits, children learn programming
                        basics and engage in design challenges, promoting
                        persistence and innovation (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of technologies activities across different age
                  groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 1
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Finger puppet song time (2-3)
                      </p>
                    </div>
                  </Link>
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100  text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 2
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Emotion masks drama (3-5 years)
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Both activities successfully encouraged creativity through
                    technology use. In the Digital Photo Exploration, children
                    showed enthusiasm in choosing subjects and experimenting
                    with perspectives, which developed their observation and
                    fine motor skills. They also demonstrated pride when sharing
                    their photos, which fostered communication and
                    self-expression. In the Voice Recording session, younger
                    children were highly engaged by the novelty of hearing their
                    voices played back. This sparked curiosity and supported
                    early language development through repetition and playful
                    vocal experimentation. One aspect to improve in the photo
                    activity would be providing more thematic challenges, such
                    as “Find something with three colours,” to further guide
                    exploration without limiting creativity. For the voice
                    activity, some toddlers were hesitant to speak; introducing
                    a warm-up with familiar songs or rhymes might make
                    participation easier. If repeating these experiences, I
                    would ensure more time for peer discussion in the photo
                    session, allowing children to describe their creative
                    choices in greater depth. For the voice activity, I would
                    incorporate sound effects and group recordings to make the
                    experience even more collaborative. These adjustments align
                    with Vygotsky’s (1978) scaffolding approach and Gardner’s
                    (2011) multiple intelligences theory, enhancing both
                    technological skills and creative agency in children.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col space-y-3">
                <Link to="/">
                  <Button className="w-full justify-start bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 shadow-sm">
                    <Home className="h-4 w-4 mr-2" /> Home Page
                  </Button>
                </Link>
                <Link to="/drama-puppetry">
                  <Button className="w-full justify-start bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300 shadow-sm">
                    <Drama className="h-4 w-4 mr-2" /> Drama & Puppetry
                  </Button>
                </Link>
                <Link to="/art">
                  <Button className="w-full justify-start bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 hover:from-pink-200 hover:to-pink-300 shadow-sm">
                    <Palette className="h-4 w-4 mr-2" /> Art
                  </Button>
                </Link>
                <Link to="/movement-music">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 shadow-sm">
                    <Music className="h-4 w-4 mr-2" /> Movement & Music
                  </Button>
                </Link>
                <Link to="/language-literacy">
                  <Button className="w-full justify-start bg-gradient-to-r from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300 shadow-sm">
                    <BookOpen className="h-4 w-4 mr-2" /> Language & Literacy
                  </Button>
                </Link>
                <Link to="/science">
                  <Button className="w-full justify-start bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 shadow-sm">
                    <FlaskConical className="h-4 w-4 mr-2" /> Science
                  </Button>
                </Link>
                <Link to="/engineering">
                  <Button className="w-full justify-start bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 hover:from-yellow-200 hover:to-yellow-300 shadow-sm">
                    <Construction className="h-4 w-4 mr-2" /> Engineering
                  </Button>
                </Link>

                <Link to="/mathematics-numeracy">
                  <Button className="w-full justify-start bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 hover:from-indigo-200 hover:to-indigo-300 shadow-sm">
                    <Calculator className="h-4 w-4 mr-2" /> Mathematics &
                    Numeracy
                  </Button>
                </Link>
                <Link to="/humanities-social-sciences">
                  <Button className="w-full justify-start bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 hover:from-teal-200 hover:to-teal-300 shadow-sm">
                    <Globe className="h-4 w-4 mr-2" /> Humanities & Social
                    Sciences
                  </Button>
                </Link>
                <Link to="/integrated-curriculum">
                  <Button className="w-full justify-start bg-gradient-to-r from-lime-100 to-lime-200 text-lime-700 hover:from-lime-200 hover:to-lime-300 shadow-sm">
                    <Puzzle className="h-4 w-4 mr-2" /> Integrated Curriculum
                  </Button>
                </Link>
                <Link to="/reference">
                  <Button className="w-full justify-start bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300 shadow-sm">
                    <FileSliders className="h-4 w-4 mr-2" /> References
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
