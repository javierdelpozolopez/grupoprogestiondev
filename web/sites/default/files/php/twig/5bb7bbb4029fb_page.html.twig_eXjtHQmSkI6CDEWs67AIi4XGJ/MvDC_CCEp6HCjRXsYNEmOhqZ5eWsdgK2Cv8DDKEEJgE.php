<?php

/* themes/contrib/basic/templates/page.html.twig */
class __TwigTemplate_c15a9cedf35c115715e7444a2d02b5bae75f7023b698b67693d1916dd74f8f27 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453 = $this->env->getExtension("Drupal\\webprofiler\\Twig\\Extension\\ProfilerExtension");
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "themes/contrib/basic/templates/page.html.twig"));

        $tags = array("set" => 1, "if" => 11);
        $filters = array("render" => 1);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if'),
                array('render'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        $context["main_menu"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "primary_menu", array()));
        // line 2
        $context["secondary_menu"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "secondary_menu", array()));
        // line 3
        echo "<div";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => "layout-container", 1 => (((        // line 5
($context["main_menu"] ?? null) || ($context["secondary_menu"] ?? null))) ? ("with-navigation") : ("")), 2 => ((        // line 6
($context["secondary_menu"] ?? null)) ? ("with-subnav") : (""))), "method"), "html", null, true));
        // line 7
        echo ">

  <!-- ______________________ HEADER _______________________ -->

  ";
        // line 11
        if ($this->getAttribute(($context["page"] ?? null), "header", array())) {
            // line 12
            echo "    <header id=\"header\">
      <div class=\"container\">
        <div id=\"header-region\" class=\"header__content\">
          ";
            // line 15
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", array()), "html", null, true));
            echo "
        </div>
      </div>
    </header><!-- /#header -->
  ";
        }
        // line 20
        echo "
  ";
        // line 21
        if (($this->getAttribute(($context["page"] ?? null), "main_menu", array()) || ($context["secondary_menu"] ?? null))) {
            // line 22
            echo "    <nav id=\"navigation\" class=\"menu";
            if (($context["main_menu"] ?? null)) {
                echo " with-primary";
            }
            if (($context["secondary_menu"] ?? null)) {
                echo " with-secondary";
            }
            echo "\">
      <div class=\"main-menu__container\" id=\"js-main-menu\">
        <div class=\"main-menu__content container\">
        ";
            // line 25
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "main_menu", array()), "html", null, true));
            echo "
        </div>
        ";
            // line 27
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["secondary_menu"] ?? null), "html", null, true));
            echo "
      </div>
    </nav><!-- /#navigation -->
  ";
        }
        // line 31
        echo "
  <!-- ______________________ MAIN _______________________ -->

  <div id=\"main\">
    <div class=\"slider__container\">
      <div class=\"slider__content\">
            ";
        // line 37
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "slider", array()), "html", null, true));
        echo "
      </div>
    </div>
    ";
        // line 40
        if ($this->getAttribute(($context["page"] ?? null), "page_title", array())) {
            // line 41
            echo "    <div class=\"container-bg__title\">
      <div class=\"container\">
            ";
            // line 43
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "page_title", array()), "html", null, true));
            echo "
      </div>
    </div>
    ";
        }
        // line 47
        echo "    ";
        if ($this->getAttribute(($context["page"] ?? null), "difrent_bg_content", array())) {
            // line 48
            echo "    <div class=\"container-bg__secondary__color\">
      <div class=\"container\">
            ";
            // line 50
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "difrent_bg_content", array()), "html", null, true));
            echo "
      </div>
    </div>
    ";
        }
        // line 54
        echo "    <div class=\"container\">
      <div id=\"content-wrapper\">
        <section class=\"main-content\" id=\"content\">

          <div id=\"content-header\">

            ";
        // line 60
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "breadcrumb", array()), "html", null, true));
        echo "

            ";
        // line 62
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "highlighted", array()))) {
            // line 63
            echo "              <div id=\"highlighted\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "highlighted", array()), "html", null, true));
            echo "</div>
            ";
        }
        // line 65
        echo "
            ";
        // line 66
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_prefix"] ?? null), "html", null, true));
        echo "

            ";
        // line 68
        if (($context["title"] ?? null)) {
            // line 69
            echo "              <h1 class=\"title\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title"] ?? null), "html", null, true));
            echo "</h1>
            ";
        }
        // line 71
        echo "
            ";
        // line 72
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_suffix"] ?? null), "html", null, true));
        echo "
            ";
        // line 73
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
        echo "

            ";
        // line 75
        if (($context["tabs"] ?? null)) {
            // line 76
            echo "              <div class=\"tabs\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["tabs"] ?? null), "html", null, true));
            echo "</div>
            ";
        }
        // line 78
        echo "
            ";
        // line 79
        if (($context["action_links"] ?? null)) {
            // line 80
            echo "              <ul class=\"action-links\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["action_links"] ?? null), "html", null, true));
            echo "</ul>
            ";
        }
        // line 82
        echo "
          </div><!-- /#content-header -->

          ";
        // line 85
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "two_grid_content", array()))) {
            // line 86
            echo "          <div id=\"two-grid-content\" class=\"grid grid-2 padding-1-0-1-0\">
          <div class=\"flex-col-ss\">
              <h1 class=\"color-primary\">¡Escríbenos!</h1>
              <h2>te responderemos a la brevedad</h2>
            </div>
            ";
            // line 91
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "two_grid_content", array()), "html", null, true));
            echo "
          </div>
        ";
        }
        // line 94
        echo "
          <div id=\"content-area\" class=\"content-area\">
            ";
        // line 96
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
        echo "
          </div>

        </section><!-- /#content -->

        ";
        // line 101
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar_first", array()))) {
            // line 102
            echo "          <aside id=\"sidebar-first\" class=\"column sidebar first\">
            ";
            // line 103
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
          </aside><!-- /#sidebar-first -->
        ";
        }
        // line 106
        echo "
        ";
        // line 107
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "sidebar_second", array()))) {
            // line 108
            echo "          <aside id=\"sidebar-second\" class=\"column sidebar second\">
            ";
            // line 109
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
            echo "
          </aside><!-- /#sidebar-second -->
        ";
        }
        // line 112
        echo "
      </div><!-- /#content-wrapper -->
    </div>
    <div class=\"container-bg__primary__color margin-1-0-1-0\">
      <div class=\"container\">
            ";
        // line 117
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "contact_info", array()), "html", null, true));
        echo "
      </div>
    </div>
    <div class=\"container\">
      <div class=\"content\">
            ";
        // line 122
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "news", array()), "html", null, true));
        echo "
      </div>
    </div>
    <!-- /.container -->
  </div><!-- /#main -->

  <!-- ______________________ FOOTER _______________________ -->

  ";
        // line 130
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "footer", array()))) {
            // line 131
            echo "    <footer id=\"footer\">
      <div class=\"container\">
        <div id=\"footer-region\" class=\"footer__content\">
          ";
            // line 134
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer", array()), "html", null, true));
            echo "
        </div>
      </div>
    </footer><!-- /#footer -->
  ";
        }
        // line 139
        echo "  ";
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["page"] ?? null), "footer_small", array()))) {
            // line 140
            echo "    <div class=\"footer-small__container\" id=\"footer-small\">
      <div class=\"container\">
        <div id=\"footer-small-region\">
          ";
            // line 143
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_small", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div><!-- /#footer -->
  ";
        }
        // line 148
        echo "
</div><!-- /.layout-container -->
";
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    public function getTemplateName()
    {
        return "themes/contrib/basic/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  328 => 148,  320 => 143,  315 => 140,  312 => 139,  304 => 134,  299 => 131,  297 => 130,  286 => 122,  278 => 117,  271 => 112,  265 => 109,  262 => 108,  260 => 107,  257 => 106,  251 => 103,  248 => 102,  246 => 101,  238 => 96,  234 => 94,  228 => 91,  221 => 86,  219 => 85,  214 => 82,  208 => 80,  206 => 79,  203 => 78,  197 => 76,  195 => 75,  190 => 73,  186 => 72,  183 => 71,  177 => 69,  175 => 68,  170 => 66,  167 => 65,  161 => 63,  159 => 62,  154 => 60,  146 => 54,  139 => 50,  135 => 48,  132 => 47,  125 => 43,  121 => 41,  119 => 40,  113 => 37,  105 => 31,  98 => 27,  93 => 25,  81 => 22,  79 => 21,  76 => 20,  68 => 15,  63 => 12,  61 => 11,  55 => 7,  53 => 6,  52 => 5,  50 => 3,  48 => 2,  46 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/contrib/basic/templates/page.html.twig", "C:\\xampp\\htdocs\\desarrollos\\grupoprogestiondev\\web\\themes\\contrib\\basic\\templates\\page.html.twig");
    }
}
