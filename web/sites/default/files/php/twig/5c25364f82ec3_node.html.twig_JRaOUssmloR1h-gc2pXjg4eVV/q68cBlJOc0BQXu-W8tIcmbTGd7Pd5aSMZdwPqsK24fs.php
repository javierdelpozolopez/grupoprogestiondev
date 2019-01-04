<?php

/* themes/contrib/basic/templates/node.html.twig */
class __TwigTemplate_b9f7238b4d99783a867f8fe7b525447609aea774c389c25be552343e1031ced6 extends Twig_Template
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
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "themes/contrib/basic/templates/node.html.twig"));

        $tags = array("set" => 2, "if" => 19, "trans" => 32);
        $filters = array("t" => 38, "without" => 44);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'trans'),
                array('t', 'without'),
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

        // line 2
        $context["classes"] = array(0 => "node");
        // line 5
        echo "
";
        // line 16
        echo "
<article";
        // line 17
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">

  ";
        // line 19
        if (((((($context["title_prefix"] ?? null) || ($context["title_suffix"] ?? null)) || ($context["display_submitted"] ?? null)) || ($context["unpublished"] ?? null)) || (twig_test_empty(($context["page"] ?? null)) && ($context["label"] ?? null)))) {
            // line 20
            echo "    <header>
      ";
            // line 21
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_prefix"] ?? null), "html", null, true));
            echo "
      ";
            // line 22
            if (( !($context["page"] ?? null) && ($context["label"] ?? null))) {
                // line 23
                echo "        <h5";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["title_attributes"] ?? null), "addClass", array(0 => ($context["title_classes"] ?? null)), "method"), "html", null, true));
                echo ">
          <a href=\"";
                // line 24
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
                echo "\" rel=\"bookmark\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["label"] ?? null), "html", null, true));
                echo "</a>
        </h5>
      ";
            }
            // line 27
            echo "      ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_suffix"] ?? null), "html", null, true));
            echo "

      ";
            // line 29
            if (($context["display_submitted"] ?? null)) {
                // line 30
                echo "        <div class=\"submitted\">
          ";
                // line 31
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["author_picture"] ?? null), "html", null, true));
                echo "
          ";
                // line 32
                echo t("Submitted by @author_name on @date", array("@author_name" => ($context["author_name"] ?? null), "@date" => ($context["date"] ?? null), ));
                // line 33
                echo "          ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["metadata"] ?? null), "html", null, true));
                echo "
        </div>
      ";
            }
            // line 36
            echo "
      ";
            // line 37
            if ( !$this->getAttribute(($context["node"] ?? null), "published", array())) {
                // line 38
                echo "        <p class=\"node--unpublished\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Unpublished")));
                echo "</p>
      ";
            }
            // line 40
            echo "    </header>
  ";
        }
        // line 42
        echo "
  <div";
        // line 43
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content_attributes"] ?? null), "addClass", array(0 => "content"), "method"), "html", null, true));
        echo ">
    ";
        // line 44
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without(($context["content"] ?? null), "links"), "html", null, true));
        echo "
  </div><!-- /.content -->

  ";
        // line 47
        if ($this->getAttribute(($context["content"] ?? null), "links", array())) {
            // line 48
            echo "    <div class=\"links\">
      ";
            // line 49
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "links", array()), "html", null, true));
            echo "
    </div><!-- /.links -->
  ";
        }
        // line 52
        echo "
</article><!-- /.node -->
";
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    public function getTemplateName()
    {
        return "themes/contrib/basic/templates/node.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  146 => 52,  140 => 49,  137 => 48,  135 => 47,  129 => 44,  125 => 43,  122 => 42,  118 => 40,  112 => 38,  110 => 37,  107 => 36,  100 => 33,  98 => 32,  94 => 31,  91 => 30,  89 => 29,  83 => 27,  75 => 24,  70 => 23,  68 => 22,  64 => 21,  61 => 20,  59 => 19,  54 => 17,  51 => 16,  48 => 5,  46 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{# Create classes array. The 'node' class is required for contextual edit links. #}
{% set classes = [
  'node'
] %}

{# BEM inspired class syntax: https://en.bem.info/
   Enable this code if you would like node classes like \"article article--layout-teaser\", where article is the content type and teaser is the view mode.
{% set classes = classes|merge([
  node.bundle|clean_class,
  view_mode ? node.bundle|clean_class ~ '--layout-' ~ view_mode|clean_class
]) %}
{% set title_classes = [
  node.bundle|clean_class ~ '__title'
] %}
#}

<article{{ attributes.addClass(classes) }}>

  {% if title_prefix or title_suffix or display_submitted or unpublished or page is empty and label %}
    <header>
      {{ title_prefix }}
      {% if not page and label %}
        <h5{{ title_attributes.addClass(title_classes) }}>
          <a href=\"{{ url }}\" rel=\"bookmark\">{{ label }}</a>
        </h5>
      {% endif %}
      {{ title_suffix }}

      {% if display_submitted %}
        <div class=\"submitted\">
          {{ author_picture }}
          {% trans %}Submitted by {{ author_name }} on {{ date }}{% endtrans %}
          {{ metadata }}
        </div>
      {% endif %}

      {% if not node.published %}
        <p class=\"node--unpublished\">{{ 'Unpublished'|t }}</p>
      {% endif %}
    </header>
  {% endif %}

  <div{{ content_attributes.addClass('content') }}>
    {{ content|without('links') }}
  </div><!-- /.content -->

  {% if content.links %}
    <div class=\"links\">
      {{ content.links }}
    </div><!-- /.links -->
  {% endif %}

</article><!-- /.node -->
", "themes/contrib/basic/templates/node.html.twig", "C:\\xampp\\htdocs\\desarrollos\\grupoprogestiondev\\web\\themes\\contrib\\basic\\templates\\node.html.twig");
    }
}
