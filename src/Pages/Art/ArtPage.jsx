import {
  Palette,
  Home,
  Paintbrush,
  Camera,
  Laptop,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Music,
  BookOpen,
  FlaskConical,
  Construction,
  Calculator,
  Globe,
  Puzzle,
} from "lucide-react";
import Art from "../../assets/art.jpg";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function ArtPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-pink-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Creative Arts Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Art in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">
                  Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering creativity, self-expression, and developmental growth
                through visual arts experiences
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={Art}
                  alt="Children creating art"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -top-15 -left-20 w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Palette className="w-12 h-12 text-pink-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Paintbrush className="w-10 h-10 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Importance of Art in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Art plays a vital role in fostering creativity in early
                  childhood as it enables children to express themselves freely,
                  explore materials, and engage in symbolic thinking. Through
                  visual arts, children develop fine motor skills,
                  problem-solving abilities, and confidence in their ideas. Art
                  allows young learners to represent their emotions, thoughts,
                  and experiences in open-ended and imaginative ways. According
                  to the EYLF V2.0, children are more likely to flourish
                  creatively when motivated to explore their ideas through
                  various artistic media in a safe and encouraging environment
                  (ACECQA, 2022; Edwards, 2023).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  Creativity Theories and Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Several theoretical foundations support the use of art to
                  develop creativity in early childhood. Lowenfeld’s stages of
                  artistic development emphasize age-based progress in
                  children’s visual expression, while Gardner’s theory of
                  Multiple Intelligences understands visual-spatial intelligence
                  as a creative strength (Gardner, 2011). The Reggio Emilia
                  approach encourages child-led, project-based art experiences
                  that value children’s ideas and autonomy (Edwards, Gandini, &
                  Forman, 2012). Vygotsky also stressed that art and imagination
                  are developed socially through interaction and scaffolding
                  (Vygotsky, 1978). These perspectives confirm the importance of
                  nurturing creativity through responsive, process-oriented art
                  experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Palette className="w-6 h-6 mr-3" />
                  Resources, Materials, and Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Early childhood teachers can support creativity in art by
                  providing diverse and developmentally appropriate components.
                  These include paints, crayons, markers, clay, collage items,
                  recycled objects, and natural elements like leaves and stones.
                  Digital technologies, such as drawing apps (e.g., Doodle Buddy
                  or Tayasui Sketches) and digital light tables, enhance
                  artistic expression when used to enhance hands-on experiences
                  (Bird et al., 2022). Setting up a dedicated art space with
                  accessible resources fosters autonomy and continuous
                  engagement. Educators should model artistic exploration, use
                  creative language, and document children’s artistic processes
                  and thoughts to extend learning.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Paints & Brushes
                  </span>
                  <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Clay & Playdough
                  </span>
                  <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Digital Tablets
                  </span>
                  <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Natural Materials
                  </span>
                  <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Recycled Items
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-pink-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          1
                        </span>
                        Exploring Colours with Edible Paints
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Infants use non-toxic edible paints with their hands and
                        fingers to explore texture and colour. Teachers guide
                        them with simple verbal cues like “splash” and “blue.”
                        fosters sensory engagement and early motor coordination.
                        (Isbell & Raines, 2013)
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          2
                        </span>
                        Safe Scribbling with Chunky Crayons
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Babies and toddlers scribble on large sheets using
                        easy-to-grip crayons. Educators name colours and shapes
                        as they appear. Encourages grip development and
                        cause-effect understanding. (Lowenfeld & Brittain, 1987)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          3
                        </span>
                        Collage with Natural Materials
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children collect leaves, twigs, and flower petals to
                        glue onto cardboard. They form their compositions with
                        help. Fosters decision-making and sensory creativity
                        (Knight, 2020).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          4
                        </span>
                        Tissue Paper Colour Blending
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children place tissue paper on wet paper to watch
                        colours blend. Teachers talk about colour mixing and
                        patterns. Explores visual transformation and material
                        properties (Wright, 2012).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          5
                        </span>
                        Clay Creatures
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children sculpt creatures from clay using their hands
                        and natural tools. Educators prompt storytelling around
                        them while sculpting. Builds spatial awareness and
                        imaginative play (McArdle, 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          6
                        </span>
                        Watercolour Emotions Art
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children paint pictures that reflect different emotions
                        using watercolours. Educators use emotion words and
                        guide discussion. Supports emotional literacy through
                        symbolic art (Isbell & Raines, 2013).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm mr-3">
                          7
                        </span>
                        Perspective Drawing with Mirrors
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children use mirrors to draw self-portraits, exploring
                        symmetry and detail. Encourages self-awareness and
                        artistic technique (Callow, 2021).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold text-sm mr-3">
                          8
                        </span>
                        Digital Art with iPads
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children use drawing apps to create digital
                        illustrations, experimenting with colour and form.
                        Educators guide app use and creative features. Supports
                        digital literacy and creative autonomy (Bird et al.,
                        2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-orange-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Camera className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of art activities across different age groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Video 1 */}
                  <Link
                    to="https://go.screenpal.com/watch/cT1U6unleWs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-pink-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 1
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Collage Activity (2-3 years)
                      </p>
                    </div>
                  </Link>

                  {/* Video 2 */}
                  <Link
                    to="https://go.screenpal.com/watch/cT1U6vnleWS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 2
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Watercolour Emotions Art (3–5 years)
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-orange-600 text-white">
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
