import {
  Construction,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Wrench,
  Blocks,
  Palette,
  Music,
  BookOpen,
  FlaskConical,
  Laptop,
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

export default function EngineeringPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-yellow-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Engineering Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                  Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering problem-solving, innovation, and design thinking
                through hands-on construction
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/1147827393/photo/child-playing-with-colorful-toy-blocks-kids-play.jpg?s=612x612&w=0&k=20&c=Qt425AQFUBSgeZ_y6fnok7SgBD5Onba_QiJy5TNJlkU="
                  alt="Children building with blocks"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Construction className="w-12 h-12 text-yellow-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Wrench className="w-10 h-10 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of
                  Engineering in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Engineering activities in early childhood provide hands-on
                  opportunities for children to explore, invent, and solve
                  problems creatively. When children build towers, bridges, or
                  machines using blocks, recycled materials, or natural objects,
                  they develop spatial awareness, critical thinking, and
                  persistence. Engineering nurtures curiosity about how things
                  work and invites experimentation through trial and error.
                  According to the Early Years Learning Framework (EYLF V2.0),
                  engineering play supports children to develop problem-solving
                  skills, resilience, and a sense of agency as they test and
                  refine their ideas (ACECQA, 2022). It helps children see
                  themselves as capable creators and thinkers, fostering
                  confidence and lifelong learning habits.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Vygotsky’s (1978) theory highlights the social nature of
                  learning and the role of collaborative problem-solving in
                  cognitive development. Engineering activities often require
                  teamwork, encouraging communication, and shared creativity.
                  Pantoya, Aguirre-Munoz, and Hunt (2015) describe the
                  development of an “engineering identity” in young children as
                  critical for fostering persistence and motivation in STEM
                  learning. The Reggio Emilia approach promotes the use of
                  “loose parts”—open-ended materials children can manipulate
                  freely—to inspire creative construction and discovery
                  (Edwards, Gandini & Forman, 2012). These perspectives position
                  educators as facilitators who guide exploration and scaffold
                  children’s thinking while allowing children to direct their
                  learning.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Blocks className="w-6 h-6 mr-3" /> Resources, Materials, and
                  Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To foster engineering creativity, early childhood teachers can
                  provide materials such as blocks, craft sticks, recycled
                  containers, and natural objects like stones and sticks. Tools
                  like tape, string, and rulers support children in testing
                  ideas and making adjustments. Outdoor environments rich in
                  loose parts encourage open-ended, imaginative play. Digital
                  technologies, such as simple robotics kits or design apps, can
                  be introduced to older children, providing new platforms for
                  creativity and problem-solving without pressure. Educators
                  enhance learning by engaging in play, asking open-ended
                  questions (e.g., “What if you tried this?”), and encouraging
                  reflection on outcomes (Howard & Mayesky, 2022).
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Building Blocks
                  </span>
                  <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Recycled Materials
                  </span>
                  <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Natural Objects
                  </span>
                  <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Robotics Kits
                  </span>
                  <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Design Apps
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg border border-yellow-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Stack and Knock Blocks
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Providing soft blocks to stack and topple supports motor
                        skills and early understanding of cause and effect
                        (Howard & Mayesky, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Texture Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Encouraging children to handle varied materials builds
                        sensory awareness and curiosity (Edwards et al., 2012).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Building with Boxes and Tubes
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children use recycled materials to construct freely,
                        promoting imagination and experimentation (Pantoya et
                        al., 2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg border border-yellow-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Shape Sorting
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Simple puzzles foster spatial reasoning and
                        problem-solving (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg border border-yellow-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Bridge Building
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using blocks or sticks, children design and test
                        bridges, learning about balance and stability
                        (Stone-MacDonald et al., 2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Simple Machines
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children create machines with levers or pulleys,
                        fostering teamwork and inquiry (Pantoya et al., 2015).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Robotics Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Basic programming activities encourage logical thinking
                        and creativity (Howard & Mayesky, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg border border-yellow-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Inventor Projects
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children design and prototype solutions to everyday
                        problems, supporting innovation and collaboration
                        (Edwards et al., 2012).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of engineering activities across different age
                  groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-orange-600" />
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
                      <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-orange-600" />
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
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Enacting the “Texture Exploration” and “Bridge Building”
                    activities helped me see how hands-on learning encourages
                    children’s creativity and critical thinking skills. During
                    texture exploration, one strength was using descriptive
                    language to guide children’s sensory awareness, which kept
                    children engaged and curious about how different materials
                    feel. I also noticed children responding with facial
                    expressions and vocal sounds, showing their active
                    exploration. However, I could improve by offering even more
                    varied materials with contrasting textures to broaden the
                    sensory experience. In the bridge-building activity,
                    children were excited and engaged as they experimented with
                    different shapes and materials. They showed persistence in
                    trying to build a stable bridge, which supported their
                    critical thinking and teamwork. One challenge was managing
                    time, as some children became frustrated when their bridges
                    collapsed. Next time, I would introduce the idea of trial
                    and error earlier and encourage a growth mindset by praising
                    effort over success. I would also incorporate more
                    open-ended questions like “What do you notice about your
                    bridge?” to deepen reflection. These approaches align with
                    Vygotsky’s (1978) emphasis on learning through social
                    interaction and Gardner’s (2011) multiple intelligences
                    theory, especially bodily-kinesthetic and
                    logical-mathematical. Overall, these enactments reinforced
                    the importance of balancing guidance with child-led
                    exploration to support creativity and resilience in
                    engineering play.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
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

                <Link to="/technologies">
                  <Button className="w-full justify-start bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 hover:from-cyan-200 hover:to-cyan-300 shadow-sm">
                    <Laptop className="h-4 w-4 mr-2" /> Technologies
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
