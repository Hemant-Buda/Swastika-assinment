import {
  Puzzle,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Combine,
  Layers,
  Palette,
  Music,
  BookOpen,
  FlaskConical,
  Construction,
  Laptop,
  Calculator,
  Globe,
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

export default function IntegratedCurriculumPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lime-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-lime-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Integrated Curriculum Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Integrated{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-teal-600">
                  Curriculum in Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering holistic development and interdisciplinary thinking
                through connected learning experiences
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/968197584/photo/young-group-of-female-students-in-a-robotics-club-having-fun.jpg?s=612x612&w=0&k=20&c=XNTzJAjGRfhWESi3WeBkjD2_wjgzaYR4SmyTLwZbu8M="
                  alt="Children engaging in integrated learning activities"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-lime-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Puzzle className="w-12 h-12 text-lime-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-teal-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Combine className="w-10 h-10 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-lime-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-teal-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of
                  Integrated Curriculum in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Integrated curriculum approaches such as STEM (Science,
                  Technology, Engineering, Mathematics), STEAM (adding Art),
                  STREAM (adding Reading and Writing), and STEMIE (adding
                  Innovation and Entrepreneurship) nurture children’s creativity
                  by connecting multiple learning domains. This holistic method
                  encourages children to think critically, solve problems, and
                  innovate by blending scientific inquiry with artistic
                  expression and literacy skills. According to the Early Years
                  Learning Framework (ACECQA, 2022), integrated learning
                  experiences support curiosity, collaboration, and the
                  development of a growth mindset. Children learn to see
                  connections across disciplines and use creativity to explore
                  real-world challenges, fostering both cognitive and social
                  skills (Lange, Brenneman & Mano, 2019).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-teal-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-lime-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The constructivist theory, especially Vygotsky’s (1978) social
                  development theory, highlights the role of social interaction
                  and cultural tools in learning, which aligns with integrated
                  curriculum’s collaborative nature. Gardner’s theory of
                  multiple intelligences (1983) supports the inclusion of
                  diverse learning styles through combining arts, science, and
                  literacy. The Reggio Emilia approach (Edwards, Gandini &
                  Forman, 2012) views children as competent explorers using many
                  “languages” to express ideas and make meaning, which fits well
                  with integrated teaching. These perspectives emphasize
                  educators as co-learners and facilitators who design
                  environments rich in provocations and resources to inspire
                  creativity and inquiry.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-lime-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-teal-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Layers className="w-6 h-6 mr-3" /> Resources, Materials, and
                  Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Teachers can provide loose parts, building blocks, natural
                  materials, art supplies, coding kits, and multimedia tools to
                  promote hands-on, playful exploration. Digital resources like
                  robotics kits, programming apps (e.g., ScratchJr), and
                  interactive science simulations support the integration of
                  technology and innovation in learning. Collaborative spaces
                  that encourage experimentation and problem-solving are
                  essential. Using documentation tools such as digital
                  portfolios and video reflections helps children and educators
                  to capture learning and support metacognition (Stone-MacDonald
                  et al., 2015).
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Loose Parts
                  </span>
                  <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Building Blocks
                  </span>
                  <span className="bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Art Supplies
                  </span>
                  <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Coding Kits
                  </span>
                  <span className="bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Robotics Kits
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-teal-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-lime-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-lime-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Exploring Textures and Shapes
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Infants and toddlers explore natural and synthetic
                        materials with different textures and shapes, fostering
                        sensory creativity and early scientific inquiry (Howard
                        & Mayesky, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Cause and Effect Play
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Simple toys like pop-up boxes and musical instruments
                        help babies learn about cause and effect, laying
                        foundations for scientific thinking (Wilson, n.d.).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-teal-500 to-lime-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Building with Blocks
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Toddlers use blocks and loose parts to build simple
                        structures, encouraging spatial reasoning,
                        problem-solving, and creativity (Stone-MacDonald et al.,
                        2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Digital Story Interaction
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using tablets with storytelling apps, children engage in
                        interactive narratives that combine literacy and
                        technology (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-lime-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Gardening Project
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children plant seeds and observe growth, integrating
                        science, maths (measuring), and responsibility, while
                        creatively documenting the process with drawings or
                        photos (Lange et al., 2019).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Coding with Robots
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using age-appropriate robotics kits, children learn
                        sequencing and problem-solving, developing computational
                        thinking and creativity (Pantoya, Aguirre-Munoz & Hunt,
                        2015).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-teal-500 to-lime-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Design Challenge
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children design and build a simple invention or bridge
                        using recycled materials, applying engineering
                        principles, teamwork, and creative problem-solving
                        (University of Nevada Corporate Extension, 2019).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Multimedia Presentation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Students research a STEM topic and create a digital
                        presentation incorporating art, writing, and technology,
                        fostering integration and creativity (Howard & Mayesky,
                        2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-teal-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of integrated curriculum activities across
                  different age groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-lime-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-teal-600" />
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
                      <div className="w-16 h-16 bg-lime-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-teal-600" />
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
              <CardHeader className="bg-gradient-to-r from-lime-600 to-teal-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Enacting the Gardening Project and Digital Story Interaction
                    activities allowed me to observe firsthand how children
                    engage with integrated learning experiences. During the
                    Gardening Project, children showed curiosity and excitement
                    while planting seeds, which fostered their connection to
                    science and nature. An aspect that went well was encouraging
                    children to make predictions and draw their observations,
                    which helped develop their critical thinking and creativity.
                    However, I noticed that some children became impatient
                    waiting for the plants to grow, suggesting the need to
                    include more immediate, hands-on tasks during the activity
                    to maintain engagement. For the Digital Story Interaction,
                    children were enthusiastic about using technology to create
                    and narrate their stories. I successfully supported their
                    digital skills by demonstrating the app’s features clearly
                    and encouraging experimentation. One challenge was balancing
                    guidance with independence; a few children required more
                    help than others. To improve, I would prepare differentiated
                    instructions and allow more peer collaboration to support
                    varied skill levels. If I were to do these activities again,
                    I would incorporate more follow-up sessions for the
                    Gardening Project, like measuring plant growth together, and
                    include storytelling peer-sharing sessions to extend
                    language and social skills. These adaptations would enhance
                    the children’s creativity and learning across STEM and
                    digital literacy domains.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-lime-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-teal-600 text-white">
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
