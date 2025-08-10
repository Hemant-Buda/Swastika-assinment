import {
  Calculator,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Shapes,
  SquareIcon as SquareRoot,
  Palette,
  Music,
  BookOpen,
  FlaskConical,
  Construction,
  Laptop,
  Globe,
  Puzzle,
  FileText,
  Camera,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function MathematicsNumeracyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative Mathematics and Numeracy 
                Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mathematics and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  Numeracy in Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering logical thinking, problem-solving, and pattern
                recognition through mathematical play
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/874364808/photo/little-boy-and-girl-learn-to-calculate-numbers.jpg?s=612x612&w=0&k=20&c=foe2XvPpyrp-ODNeUkSYCkroxnfdOFdd-cYAPaGm6SI="
                  alt="Children playing with numbers and shapes"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Calculator className="w-12 h-12 text-indigo-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Shapes className="w-10 h-10 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of
                  Mathematics and Numeracy in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Mathematics and numeracy are fundamental for developing
                  logical thinking, problem-solving, and pattern recognition,
                  all of which support creativity in young children. When
                  children explore numbers, shapes, and spatial relationships
                  through play, they learn to think flexibly and invent new
                  solutions. The Early Years Learning Framework (ACECQA, 2022)
                  emphasises that mathematical experiences encourage curiosity
                  and wonder about the world. Creative approaches to numeracy
                  engage children in open-ended investigations that promote
                  confident and enthusiastic learners (McDonald, 2019).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Fleer and Raban (n.d.) suggest that integrating creativity
                  into mathematics involves fostering children’s curiosity and
                  imagination through hands-on exploration. Constructivist
                  theorists like Piaget (1952) argue that children build
                  understanding through active manipulation of materials,
                  supporting creative thinking in mathematics. Vygotsky’s (1978)
                  social constructivism highlights how collaborative learning
                  promotes creative problem-solving as children share diverse
                  strategies. Encouraging multiple solutions and flexible
                  thinking nurtures creative mathematical thinking (Australian
                  Education Research Organisation, 2023).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <SquareRoot className="w-6 h-6 mr-3" /> Resources, Materials,
                  and Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Early childhood educators can use a variety of manipulatives
                  like blocks, counters, measuring tools, and pattern tiles to
                  engage children physically and visually. Digital resources
                  such as apps for counting, shapes, and spatial reasoning
                  provide interactive and playful learning experiences.
                  Technologies like tablets can offer games that promote
                  numerical fluency and problem-solving skills (McDonald, 2019).
                  Open-ended materials allow children to experiment and create
                  their own mathematical representations, supported by educator
                  guidance to extend thinking (Howard & Mayesky, 2022).
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Blocks & Counters
                  </span>
                  <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Measuring Tools
                  </span>
                  <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Pattern Tiles
                  </span>
                  <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Math Apps
                  </span>
                  <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Open-ended Materials
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Stacking and Sorting Blocks
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Infants explore stacking and sorting blocks by size,
                        colour, and shape, developing early numeracy concepts
                        like classification and comparison (McDonald, 2019).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Number Songs with Movements
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using songs such as “One, Two, Buckle My Shoe,”
                        educators combine counting with body movements to foster
                        number awareness and rhythm (Australian Education
                        Research Organisation, 2023).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Shape Hunt
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Toddlers explore the environment to find and name
                        shapes, encouraging spatial awareness and vocabulary
                        development (Fleer & Raban, n.d.).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Counting Everyday Objects
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children count familiar objects such as snack pieces or
                        toys, promoting one-to-one correspondence and number
                        sense (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Pattern Creation with Beads
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children use beads to create and extend patterns,
                        fostering recognition of sequences and encouraging
                        prediction skills (McDonald, 2019).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Measuring Water Play
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        During water play, children use measuring cups to
                        explore volume and comparison, applying mathematical
                        language and estimation (Fleer & Raban, n.d.).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Math Story Problems
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Students solve simple story problems involving addition
                        and subtraction, developing reasoning and
                        problem-solving strategies (Australian Education
                        Research Organisation, 2023).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Digital Math Games
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using tablet apps, children engage in interactive games
                        that challenge their understanding of numbers, shapes,
                        and operations, supporting digital literacy alongside
                        numeracy (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of mathematics and numeracy activities across different
                  age groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-indigo-600" />
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
                      <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-indigo-600" />
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
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Facilitating the “Number Songs with Movements” and “Counting
                    Everyday Objects” activities highlighted the value of
                    blending hands-on learning with mathematical concepts. In
                    the number songs session, one aspect that went well was how
                    movement and music helped children remember numbers in
                    sequence. Several children began singing independently as
                    they counted on their fingers. This reinforced one-to-one
                    correspondence and made learning joyful. The “Counting
                    Everyday Objects” activity was equally successful in
                    connecting numeracy to real-life contexts; children were
                    engaged in finding, sorting, and counting, and some extended
                    the activity by suggesting new objects to include. However,
                    one area to improve in the number of songs was pacing—some
                    younger children struggled to keep up with the actions. I
                    could have slowed the tempo and repeated the verses for
                    better mastery. For the counting activity, I realised I
                    could have incorporated more open-ended challenges, such as
                    “Can you make two groups with the same total?” to promote
                    problem-solving. If I were to repeat these activities, I
                    would integrate more visual supports, such as number cards,
                    to strengthen numeral recognition and allow extra time for
                    peer-led counting. These reflections align with Vygotsky’s
                    (1978) scaffolding theory and Gardner’s (2011) emphasis on
                    multiple intelligences to support diverse learning needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
