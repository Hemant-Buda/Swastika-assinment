import {
  Globe,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  Users,
  Map,
  Palette,
  Music,
  BookOpen,
  FlaskConical,
  Construction,
  Laptop,
  Calculator,
  Puzzle,
  FileText,
  FileSliders,
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

export default function HumanitiesSocialSciencesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Humanities & Social Science Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Humanities & Social{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Sciences in Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering understanding of self, others, and the world through
                cultural and historical exploration
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/971350970/photo/young-school-girl-giving-a-presentation-in-class.jpg?s=612x612&w=0&k=20&c=7ZZNstgRLD6KWYD58Svo2swaYzRzaRM5oYPZJU0qFKc="
                  alt="Children learning about different cultures"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-teal-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Globe className="w-12 h-12 text-teal-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-cyan-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Users className="w-10 h-10 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-teal-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of
                  Humanities and Social Sciences in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Humanities and Social Sciences (HASS) help young children
                  understand themselves, others, and the world they live in.
                  This curriculum area encourages curiosity about people,
                  places, cultures, and history, which sparks creativity by
                  inspiring children to explore different perspectives and
                  express their ideas. According to the Early Years Learning
                  Framework (ACECQA, 2022), engaging with HASS supports identity
                  formation and fosters respect and empathy through creative
                  storytelling, role play, and inquiry. Creative approaches to
                  HASS empower children to connect past and present and imagine
                  possibilities for the future (Howard & Mayesky, 2022).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Constructivist theorists like Vygotsky (1978) emphasize social
                  interaction and cultural tools in learning, which aligns with
                  HASS’s focus on social contexts and collaborative inquiry.
                  Dewey (1938) advocated for experiential learning where
                  children actively engage in meaningful real-world problems,
                  promoting creativity through inquiry and reflection. The
                  Reggio Emilia approach (Edwards, Gandini & Forman, 2012)
                  values children’s voices and their “hundred languages,”
                  encouraging creative expression of their understandings of
                  community and environment. These perspectives highlight
                  educators’ roles as facilitators who guide explorations that
                  foster critical thinking and creative problem-solving.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-teal-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Map className="w-6 h-6 mr-3" /> Resources, Materials, and
                  Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Teachers can provide maps, globes, photographs, cultural
                  artifacts, storybooks, and costumes to support exploration of
                  history, geography, and culture. Community visits and virtual
                  tours expand children’s understanding of the world. Digital
                  tools such as Google Earth, interactive timelines, and
                  multimedia storytelling apps offer immersive experiences that
                  enhance creativity and engagement (Howard & Mayesky, 2022).
                  Materials should encourage children to ask questions, compare
                  perspectives, and express their ideas through drawing, drama,
                  or digital media.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Maps & Globes
                  </span>
                  <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Cultural Artifacts
                  </span>
                  <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Storybooks & Costumes
                  </span>
                  <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Google Earth
                  </span>
                  <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Multimedia Apps
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Family Photos and Stories
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Infants and toddlers explore family photos and listen to
                        stories about family members, supporting identity and
                        social awareness (ACECQA, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Cultural Music and Movement
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Playing music from different cultures during playtime
                        encourages children’s appreciation of diversity and
                        expression through movement (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Community Helpers Role Play
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Toddlers dress up and pretend to be firefighters,
                        doctors, or shopkeepers, fostering understanding of
                        community roles and social interactions (Edwards et al.,
                        2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Exploring Local Environment
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Simple nature walks and discussions about plants,
                        animals, and weather promote observation skills and
                        curiosity about place (Vygotsky, 1978).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Cultural Storytelling
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children listen to and retell stories from various
                        cultures, supporting language, empathy, and creative
                        expression (Howard & Mayesky, 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Mapping Our Neighbourhood
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using simple maps and drawings, children explore their
                        local community and create representations of familiar
                        places, developing spatial awareness and collaboration
                        (Dewey, 1938).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        History Through Drama
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children reenact historical events or traditions through
                        drama and puppetry, deepening understanding and creative
                        engagement with the past (Edwards et al., 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Digital Story Creation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using apps, children research a cultural topic or local
                        history and create digital stories or presentations,
                        enhancing research skills and digital creativity (Howard
                        & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of humanities social sciences activities across
                  different age groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link
                    to="https://go.screenpal.com/watch/cTjXlkn2efG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-teal-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 1
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Cultural storytelling(3-5 years)
                      </p>
                    </div>
                  </Link>
                  {/* //link */}
                  <Link to="https://go.screenpal.com/watch/cTjXl7n2eie" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100  text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-teal-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 2
                      </h4>
                      <p className="text-gray-600 mb-2">
                      Community Helpers Role Play (2–3 Years)
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Enacting the Cultural Storytelling and Community Helpers
                    Role Play activities provided valuable insights into
                    facilitating children’s creativity and social understanding.
                    One aspect that went well during the storytelling was my use
                    of props and interactive questions, which engaged the
                    children and helped them connect emotionally with the
                    Rainbow Serpent story. This approach encouraged their
                    imagination and cultural awareness. Similarly, during the
                    role play, allowing children to choose their community
                    helper roles promoted autonomy and encouraged cooperative
                    play, which supported their social and language development.
                    However, one area for improvement was managing the group
                    size during role play. With many children eager to
                    participate, some became passive observers, limiting their
                    engagement. To address this, I would plan smaller groups or
                    rotate roles more frequently to ensure active involvement
                    for all children. Another area to enhance would be to
                    include more open-ended questions during both activities to
                    provoke deeper thinking, such as “How would you help if you
                    were a firefighter?” or “What else might the Rainbow Serpent
                    teach us? “If I were to facilitate these experiences again,
                    I would incorporate more culturally diverse stories and
                    community roles to broaden children’s perspectives. I would
                    also scaffold children’s reflections at the end to help them
                    articulate their learning more fully, thus enhancing the
                    overall effectiveness of fostering creativity and cultural
                    understanding.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-teal-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
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
