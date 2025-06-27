import { Link } from "react-router-dom";
import Home from "../../assets/home.jpg";
import Art from "../../assets/art1.jpg";
import Darama from "../../assets/drama.avif";
import { Palette, Drama, Heart, Star } from "lucide-react";
import Button from "../../Components/Button/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-15 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Early Childhood Education Excellence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fostering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Creativity
                </span>{" "}
                in Early Childhood
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Exploring innovative approaches to nurture creative expression
                and learning through art, drama, and puppetry in early childhood
                settings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/art">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Palette className="w-5 h-5 mr-2" />
                    Explore Art Curriculum
                  </Button>
                </Link>
                <Link to="/drama-puppetry">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 bg-transparent"
                  >
                    <Drama className="w-5 h-5 mr-2" />
                    Drama & Puppetry
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={Home}
                  alt="Children engaged in creative activities"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -top-15 -left-20 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Palette className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className=" items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Creativity in the Early Years Curriculum
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Creativity is a basic aspect of early childhood education that
                  encourages holistic development, promotes imagination, and
                  supports children in exploring the world around them in
                  significant ways. It is not limited to the arts but expands
                  across all curriculum areas, including science, mathematics,
                  technology, literacy, and humanities. In the early years,
                  creativity arises through play, exploration, curiosity, and
                  problem-solving, allowing children to express their thoughts,
                  feelings, and selves (Edwards, 2023).
                </p>
                <p>
                  Early childhood educators play a crucial role in facilitating
                  creativity by providing surroundings rich in open-ended
                  resources, imaginative play time, and collaborative learning
                  opportunities. According to the Early Years Learning Framework
                  (EYLF V2.0), creativity is raised when children feel safe,
                  supported, and motivated to take risks and try new things
                  (ACECQA, 2022). Creative learning is deeply linked to
                  children’s sense of belonging, being, and becoming. It also
                  helps agency, critical thinking, and innovation skills
                  necessary for life and learning.
                </p>
                <p>
                  Theoretical viewpoints help frame our understanding of
                  creativity in early childhood. Vygotsky (1978) highlighted the
                  social context of creative development, proposing that
                  imaginative play is a guiding activity that boosts cognitive
                  growth. Similarly, the Reggio Emilia strategy views children
                  as capable, competent learners who co-create knowledge through
                  creative expression (Edwards, Gandini & Forman, 2012). Howard
                  Gardner’s theory of Multiple Intelligences (2011) widens the
                  definition of creativity by acknowledging how children express
                  their comprehension through movement, music, storytelling,
                  drawing, and construction.
                </p>
                <p>
                  Creativity is facilitated through intentional teaching,
                  meaningful provocations, and the integration of creative
                  pedagogies across the curriculum. In mathematics, for example,
                  Children explore patterns and problem-solve using hands-on
                  manipulatives—construction play. In science, they hypothesize
                  and experiment with natural materials. In literacy,
                  storytelling and dramatic play promote expressive language and
                  imaginative thinking. The creative arts, such as music, dance,
                  puppetry, and visual arts, allow children to understand their
                  world and convey their emotions in symbolic ways (Craft,
                  2015). Incorporating digital technologies is another key
                  strategy for supporting creativity. Tools such as tablets,
                  child-friendly design apps, light tables, and digital drawing
                  software offer new possibilities for indication and multimodal
                  learning. However, it is important that these tools are
                  developmentally suitable and used to extend—not
                  replace—hands-on exploration and social interaction (Bird et
                  al., 2022).
                </p>
                <p>
                  Through this website, we will explore how early childhood
                  educators can foster creativity in specific curriculum
                  areas—starting with Art and Drama & and Puppetry. These areas
                  are not only essential to creative expression but also closely
                  aligned with cognitive, social, emotional, and language
                  development in young children. Each page includes a brief
                  theoretical overview, resources and strategies, and learning
                  experiences tailored to four key developmental stages: 0–2
                  years, 2–3 years, 3–5 years, and 6–8 years. By nurturing
                  creativity in the early years, educators lay the foundation
                  for lifelong learning, innovation, and well-being. As children
                  are involved creatively, they learn to take initiative, build
                  confidence, connect with others, and express themselves in
                  ways that are both joyful and meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Curriculum Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive programs designed to nurture creativity and
              development in young learners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Art}
                  alt="Art curriculum activities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Art Curriculum
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Visual arts, creative expression, and hands-on learning
                  experiences
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how art education fosters creativity, fine motor
                  development, and self-expression across all age groups in
                  early childhood settings.
                </p>
                <Link to="/art">
                  <Button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Art Curriculum
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Darama}
                  alt="Drama and puppetry activities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Drama className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Drama & Puppetry
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Dramatic play, storytelling, and puppet-based learning
                  activities
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore how drama and puppetry enhance language development,
                  social skills, and emotional expression in young children.
                </p>
                <Link to="/drama-puppetry">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Drama & Puppetry
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
