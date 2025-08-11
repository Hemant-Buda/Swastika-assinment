import {
  FlaskConical,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Atom,
  Microscope,
  Palette,
  Music,
  BookOpen,
  Construction,
  Laptop,
  Calculator,
  Globe,
  Puzzle,
  Camera,
  FileText,
  FileSliders 
} from "lucide-react";

import Button from "../../Components/Button/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import { Link } from "react-router-dom";

export default function SciencePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-red-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Science Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Science in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering curiosity, critical thinking, and problem-solving
                through scientific exploration
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/639407632/photo/excited-school-girls-during-chemistry-experiment.jpg?s=612x612&w=0&k=20&c=-W-vGm-bJ9XnxiCyFIxmLz3Asi0NJEiUjJoPShtBGLo="
                  alt="Children doing science experiments"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-red-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FlaskConical className="w-12 h-12 text-red-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Atom className="w-10 h-10 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of Science
                  in Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Science is all about curiosity, wondering why things happen,
                  asking questions, and exploring the world through hands-on
                  experiences. In early childhood, science sparks creativity by
                  encouraging children to observe, experiment, and think
                  critically. The EYLF reminds us that when children engage in
                  scientific exploration, they develop a deeper understanding of
                  their environment and learn to solve problems in imaginative
                  ways (ACECQA, 2022). Science activities support children’s
                  natural curiosity and build their confidence as investigators,
                  helping them to see connections and patterns in everyday life.
                  Science isn’t just about facts or formulas. It’s a playful,
                  creative process where children predict, test, observe, and
                  reflect. These processes help them develop important skills
                  like critical thinking, persistence, and collaboration. When
                  children explore science creatively, they learn to value
                  discovery and understand that mistakes are a valuable part of
                  learning.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Vygotsky’s (1978) ideas about social learning are especially
                  relevant to early science. He believed that children learn
                  best through interaction, where adults and peers scaffold
                  their thinking. Science activities that involve dialogue,
                  collaboration, and guided questioning help children to expand
                  their ideas and deepen their understanding creatively. Fleer
                  and Raban (n.d.) emphasize that inquiry-based science in early
                  childhood nurtures creativity by encouraging children to pose
                  their own questions and design their own experiments. This
                  learner-centred approach supports children’s agency and
                  problem-solving skills, building on their interests and
                  everyday experiences. Lange, Brenneman, and Mano (2019)
                  highlight the value of introducing STEM concepts early,
                  helping children to see science as interconnected with
                  technology, engineering, and mathematics. By blending these
                  areas, educators open rich opportunities for creative
                  exploration and integrated learning.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Microscope className="w-6 h-6 mr-3" /> Resources, Materials,
                  and Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To encourage creative science learning, teachers can provide
                  open-ended materials that invite exploration and
                  experimentation. Natural materials like rocks, leaves, water,
                  sand, and magnets offer endless opportunities to investigate
                  properties, cause and effect, and change. Simple tools such as
                  magnifying glasses, measuring cups, and scales help children
                  make careful observations and develop scientific skills.
                  Outdoor spaces serve as rich laboratories where children can
                  observe plants, insects, weather, and natural phenomena.
                  Digital technologies, like interactive science apps, video
                  microscopes, and virtual experiments, also broaden children’s
                  access to scientific concepts in engaging ways (Howard &
                  Mayesky, 2022). However, these should complement rather than
                  replace hands-on experiences, ensuring children remain active
                  explorers. Teachers support creativity by asking open-ended
                  questions (“What do you notice?” “What do you think will
                  happen if…?”), encouraging predictions, and inviting children
                  to explain their thinking. Documenting children’s questions
                  and discoveries affirms their ideas and makes learning visible
                  (Stone-MacDonald et al., 2015).
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Natural Materials
                  </span>
                  <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Magnifying Glasses
                  </span>
                  <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Measuring Tools
                  </span>
                  <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Outdoor Spaces
                  </span>
                  <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Science Apps
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Sensory Exploration with Water
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Provide shallow tubs of water with safe objects like
                        sponges and cups for babies to splash, pour, and feel
                        different textures. Encourages curiosity, sensory
                        awareness, and cause-and-effect understanding (Howard &
                        Mayesky, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Nature Walk Discovery
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Take infants outside to explore leaves, flowers, and
                        stones, naming objects and textures. Builds vocabulary
                        and early observational skills (Fleer & Raban, n.d.).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Magnet Play
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Offer magnets and various objects to test what sticks
                        and what doesn’t. Encourage children to predict
                        outcomes. Supports early scientific thinking and inquiry
                        (Lange et al., 2019).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Planting Seeds
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children plant seeds in pots, water them, and observe
                        growth over time. Teaches life cycles, responsibility,
                        and patience (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Sink or Float Experiment
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Provide various objects and a water tub for children to
                        test whether items sink or float. Record findings with
                        drawings or charts. Develops hypothesis testing and data
                        recording skills (Stone-MacDonald et al., 2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Weather Station
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Create a simple weather chart where children observe and
                        record daily weather, discussing changes and patterns.
                        Enhances observational skills and understanding of
                        natural phenomena (Fleer & Raban, n.d.).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Simple Machines Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Use ramps, pulleys, and levers to investigate how forces
                        work and solve practical problems. Builds engineering
                        thinking and problem-solving creativity (Pantoya,
                        Aguirre-Munoz & Hunt, 2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Digital Microscope Investigation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children use digital microscopes to explore textures and
                        tiny details in natural materials, capturing images to
                        share and discuss. Encourages detailed observation and
                        technology integration (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of science activities across different age groups.
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
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Enacting the “Weather Station” and “Magnet Play” learning
                    experiences deepened my appreciation for hands-on,
                    inquiry-based science teaching. In the weather activity, one
                    success was how involving children in using real tools
                    increased their engagement and curiosity about natural
                    phenomena. Encouraging them to observe, measure, and discuss
                    the weather fostered critical thinking and language
                    development. The group weather chart provided a visual
                    reference, helping children connect concepts to their
                    environment. In magnet play, the tactile exploration with
                    magnets allowed children to test hypotheses and develop
                    early scientific reasoning. I noticed children eagerly
                    predicted and tested objects, demonstrating emerging
                    understanding of forces and material properties. However,
                    one area to improve was pacing: some children lost focus
                    during prolonged explanations, so shorter, more dynamic
                    interactions would be better. Also, introducing more varied
                    magnetic materials could enrich exploration. If I repeated
                    these activities, I would incorporate more open-ended
                    questioning, such as “What do you notice?” and “What do you
                    wonder?” to deepen inquiry and creativity. These approaches
                    align with Vygotsky’s (1978) social constructivism,
                    emphasizing learning through interaction, and Bruner’s
                    (1961) scaffolding theory, supporting guided discovery.
                    Overall, these enactments highlighted the importance of
                    balancing adult guidance with child-led exploration to
                    effectively facilitate scientific creativity in early
                    childhood
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
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
