import {
  Home,
  Palette,
  Drama,
  FileText,
  Heart,
  Star,
  Lightbulb,
  Users,
} from "lucide-react";
import Darama from "../../assets/drama.avif";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function DramaPuppetryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Dramatic Arts Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Drama &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Puppetry
                </span>{" "}
                in Early Childhood
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Enhancing language development, social skills, and emotional
                expression through dramatic play and puppetry
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={Darama}
                  alt="Children engaged in drama and puppetry"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -top-15 -left-20 w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Drama className="w-10 h-10 text-purple-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <Users className="w-10 h-10 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Importance of Drama and Puppetry in Facilitating Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Drama and puppetry are powerful materials for nurturing
                  creativity in early childhood. They permit children to explore
                  emotions, roles, and interactions through imaginative
                  expression. These forms of creative play support linguistic
                  development, cooperation, empathy, and problem-solving.
                  According to the EYLF V2.0, engaging in drama supports
                  children to express themselves through movement, voice, and
                  narration while fostering confidence and identity (ACECQA,
                  2022). Puppetry gives a safe way for shy or hesitant children
                  to communicate and engage. Both mediums enrich children’s
                  capacity to engage creatively with the world around them
                  (Wright, 2012).
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  Creativity Theories and Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Vygotsky (1978) viewed dramatic play as a central
                  developmental activity that enables children to absorb new
                  ideas, develop language, and broaden imagination. Smilansky’s
                  (1990) theory of sociodramatic play highlights how role-play
                  builds social and emotional comprehension. The Reggio Emilia
                  approach supports children to explore stories, identities, and
                  emotions through drama and puppetry, using the “hundred
                  languages” of children (Edwards, Gandini & Forman, 2012).
                  These perspectives stance educators as facilitators who guide
                  children to co-construct meaning, solve problems, and ponder
                  on experiences through dramatic expression and creative
                  dialogue.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Drama className="w-6 h-6 mr-3" />
                  Resources, Materials, and Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  To support drama and puppetry, early childhood teachers can
                  provide open-ended items such as scarves, hats, costumes,
                  masks, and soft toys. Puppet theatres, felt boards, and
                  role-play corners encourage storytelling and performance.
                  Teachers can also use digital storybooks and apps like Puppet
                  Pals or ChatterPix for digital puppet creation (Bird et al.,
                  2022). Materials should be accessible and child-directed to
                  encourage choice, improvisation, and collaboration. Educators
                  can improve learning by joining the play, prompting language,
                  and prolonging ideas using modelling and open-ended
                  questioning (Isbell & Raines, 2013).
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          1
                        </span>
                        Animal Puppet Sound Play
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Educators can use animal hand puppets to mimic sounds
                        (“moo,” “baa”), encouraging babies to imitate. Supports
                        early communication, listening, and expressive sound
                        play (Isbell & Raines, 2013).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          2
                        </span>
                        Peekaboo with Scarves
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Educator plays peekaboo with colourful scarves, slowly
                        engaging infants in lifting and hiding. Encourages
                        object permanence, facial recognition, and joy in
                        interaction (Smilansky, 1990).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2-3 Years */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          3
                        </span>
                        Finger Puppet Song Time
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Use finger puppets during songs like “Five Little Ducks”
                        or “Itsy Bitsy Spider.” Children are invited to move
                        puppets and sing. Enhances rhythm, memory, and language
                        patterns (Wright, 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          4
                        </span>
                        Dramatic Dress-Up Corner
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children wear hats and capes, pretending to be animals,
                        workers, or family members. Educator narrates and joins
                        in play. Develops symbolic thought and social play
                        (Smilansky, 1990).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          5
                        </span>
                        Story Reenactment – “The Very Hungry Caterpillar”
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        After reading the book, children use puppets and props
                        to act out the story. Promotes sequencing, language use,
                        and imaginative recall (Callow, 2021).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          6
                        </span>
                        Emotion Masks Drama
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children choose or create paper plate masks representing
                        different emotions (happy, sad, surprised). They then
                        role-play scenes. Builds emotional vocabulary and
                        empathy (Edwards et al., 2012).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                          7
                        </span>
                        Creating a Puppet Show
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Children form their sock puppets and write a short play
                        to perform for friends or parents. Develops
                        storytelling, script writing, teamwork, and confidence
                        (Bird et al., 2022).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mr-3">
                          8
                        </span>
                        Digital Puppet Creation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using the Puppet Pals app, children build characters,
                        record voices, and produce a mini story. Fosters
                        creativity, digital literacy, and narrative skill (Bird
                        et al., 2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col space-y-3">
                <Link to="/">
                  <Button className="w-full justify-start bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 shadow-sm">
                    <Home className="h-4 w-4 mr-2" />
                    Home Page
                  </Button>
                </Link>
                <Link to="/art">
                  <Button className="w-full justify-start bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 hover:from-pink-200 hover:to-pink-300 shadow-sm">
                    <Palette className="h-4 w-4 mr-2" />
                    Art Curriculum
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
