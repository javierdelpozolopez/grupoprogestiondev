<?php

/* modules/contrib/slick/templates/slick.html.twig */
class __TwigTemplate_6bae4fef18d38c0bbb6e4fbcc0e55b751be1aacf38745f3ccc08738d4c0384e8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'slick_content' => array($this, 'block_slick_content'),
            'slick_arrow' => array($this, 'block_slick_arrow'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453 = $this->env->getExtension("Drupal\\webprofiler\\Twig\\Extension\\ProfilerExtension");
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "modules/contrib/slick/templates/slick.html.twig"));

        $tags = array("set" => 31, "if" => 58, "block" => 62, "for" => 63);
        $filters = array("join" => 36, "clean_class" => 37, "raw" => 72, "striptags" => 72);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'block', 'for'),
                array('join', 'clean_class', 'raw', 'striptags'),
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

        // line 31
        $context["classes"] = array(0 => "slick", 1 => (($this->getAttribute(        // line 33
($context["settings"] ?? null), "unslick", array())) ? ("unslick") : ("")), 2 => ((((        // line 34
($context["display"] ?? null) == "main") && $this->getAttribute(($context["settings"] ?? null), "blazy", array()))) ? ("blazy") : ("")), 3 => (($this->getAttribute(        // line 35
($context["settings"] ?? null), "vertical", array())) ? ("slick--vertical") : ("")), 4 => (($this->getAttribute($this->getAttribute(        // line 36
($context["settings"] ?? null), "attributes", array()), "class", array())) ? (twig_join_filter($this->getAttribute($this->getAttribute(($context["settings"] ?? null), "attributes", array()), "class", array()), " ")) : ("")), 5 => (($this->getAttribute(        // line 37
($context["settings"] ?? null), "skin", array())) ? (("slick--skin--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "skin", array())))) : ("")), 6 => ((twig_in_filter("boxed", $this->getAttribute(        // line 38
($context["settings"] ?? null), "skin", array()))) ? ("slick--skin--boxed") : ("")), 7 => ((twig_in_filter("split", $this->getAttribute(        // line 39
($context["settings"] ?? null), "skin", array()))) ? ("slick--skin--split") : ("")), 8 => (($this->getAttribute(        // line 40
($context["settings"] ?? null), "optionset", array())) ? (("slick--optionset--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "optionset", array())))) : ("")), 9 => ((        // line 41
(isset($context["arrow_down_attributes"]) || array_key_exists("arrow_down_attributes", $context))) ? ("slick--has-arrow-down") : ("")), 10 => (($this->getAttribute(        // line 42
($context["settings"] ?? null), "asNavFor", array())) ? (("slick--" . \Drupal\Component\Utility\Html::getClass(($context["display"] ?? null)))) : ("")), 11 => ((($this->getAttribute(        // line 43
($context["settings"] ?? null), "slidesToShow", array()) > 1)) ? ("slick--multiple-view") : ("")), 12 => ((($this->getAttribute(        // line 44
($context["settings"] ?? null), "count", array()) <= $this->getAttribute(($context["settings"] ?? null), "slidesToShow", array()))) ? ("slick--less") : ("")), 13 => ((((        // line 45
($context["display"] ?? null) == "main") && $this->getAttribute(($context["settings"] ?? null), "media_switch", array()))) ? (("slick--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "media_switch", array())))) : ("")), 14 => ((((        // line 46
($context["display"] ?? null) == "thumbnail") && $this->getAttribute(($context["settings"] ?? null), "thumbnail_caption", array()))) ? ("slick--has-caption") : ("")));
        // line 50
        $context["arrow_classes"] = array(0 => "slick__arrow", 1 => (($this->getAttribute(        // line 52
($context["settings"] ?? null), "vertical", array())) ? ("slick__arrow--v") : ("")), 2 => (($this->getAttribute(        // line 53
($context["settings"] ?? null), "skin_arrows", array())) ? (("slick__arrow--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(($context["settings"] ?? null), "skin_arrows", array())))) : ("")));
        // line 56
        echo "
<div";
        // line 57
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">
  ";
        // line 58
        if ( !$this->getAttribute(($context["settings"] ?? null), "unslick", array())) {
            // line 59
            echo "    <div";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content_attributes"] ?? null), "addClass", array(0 => "slick__slider"), "method"), "html", null, true));
            echo ">
  ";
        }
        // line 61
        echo "
  ";
        // line 62
        $this->displayBlock('slick_content', $context, $blocks);
        // line 67
        echo "
  ";
        // line 68
        if ( !$this->getAttribute(($context["settings"] ?? null), "unslick", array())) {
            // line 69
            echo "    </div>
    ";
            // line 70
            $this->displayBlock('slick_arrow', $context, $blocks);
            // line 82
            echo "  ";
        }
        // line 83
        echo "</div>
";
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    // line 62
    public function block_slick_content($context, array $blocks = array())
    {
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453 = $this->env->getExtension("Drupal\\webprofiler\\Twig\\Extension\\ProfilerExtension");
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "slick_content"));

        // line 63
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 64
            echo "      ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["item"], "html", null, true));
            echo "
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 66
        echo "  ";
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    // line 70
    public function block_slick_arrow($context, array $blocks = array())
    {
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453 = $this->env->getExtension("Drupal\\webprofiler\\Twig\\Extension\\ProfilerExtension");
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->enter($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "slick_arrow"));

        // line 71
        echo "      <nav";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["arrow_attributes"] ?? null), "addClass", array(0 => ($context["arrow_classes"] ?? null)), "method"), "html", null, true));
        echo ">
        ";
        // line 72
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(strip_tags($this->getAttribute(($context["settings"] ?? null), "prevArrow", array()), "<a><em><span><strong><button><div>")));
        echo "
        ";
        // line 73
        if ((isset($context["arrow_down_attributes"]) || array_key_exists("arrow_down_attributes", $context))) {
            // line 74
            echo "          <button";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["arrow_down_attributes"] ?? null), "addClass", array(0 => "slick-down"), "method"), "setAttribute", array(0 => "type", 1 => "button"), "method"), "setAttribute", array(0 => "data-target", 1 => $this->getAttribute(            // line 76
($context["settings"] ?? null), "downArrowTarget", array())), "method"), "setAttribute", array(0 => "data-offset", 1 => $this->getAttribute(            // line 77
($context["settings"] ?? null), "downArrowOffset", array())), "method"), "html", null, true));
            echo "></button>
        ";
        }
        // line 79
        echo "        ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(strip_tags($this->getAttribute(($context["settings"] ?? null), "nextArrow", array()), "<a><em><span><strong><button><div>")));
        echo "
      </nav>
    ";
        
        $__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453->leave($__internal_b8a44bb7188f10fa054f3681425c559c29de95cd0490f5c67a67412aafc0f453_prof);

    }

    public function getTemplateName()
    {
        return "modules/contrib/slick/templates/slick.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  161 => 79,  156 => 77,  155 => 76,  153 => 74,  151 => 73,  147 => 72,  142 => 71,  136 => 70,  129 => 66,  120 => 64,  115 => 63,  109 => 62,  101 => 83,  98 => 82,  96 => 70,  93 => 69,  91 => 68,  88 => 67,  86 => 62,  83 => 61,  77 => 59,  75 => 58,  71 => 57,  68 => 56,  66 => 53,  65 => 52,  64 => 50,  62 => 46,  61 => 45,  60 => 44,  59 => 43,  58 => 42,  57 => 41,  56 => 40,  55 => 39,  54 => 38,  53 => 37,  52 => 36,  51 => 35,  50 => 34,  49 => 33,  48 => 31,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{#
/**
 * @file
 * Default theme implementation for the Slick carousel template.
 *
 * This template holds 3 displays: main, thumbnail and overlay slicks in one.
 * Arrows are enforced, but toggled by JS accordingly. This allows responsive
 * object to enable and disable it as needed without losing context.
 *
 * Available variables:
 * - items: The array of items containing main image/video/audio, optional
 *     image/video/audio overlay and captions, and optional thumbnail
 *     texts/images.
 * - settings: A cherry-picked settings that mostly defines the slide HTML or
 *     layout, and none of JS settings/options which are defined at data-slick.
 * - attributes: The array of attributes to hold the main container classes, id.
 * - content_attributes: The array of attributes to hold optional RTL, id and
 *     data-slick containing JSON object aka JS settings the Slick expects to
 *     override default options. We don't store these JS settings in the normal
 *     <head>, but inline within data-slick attribute instead.
 *
 * Debug:
 * @see https://www.drupal.org/node/1906780
 * @see https://www.drupal.org/node/1903374
 * Use Kint: {{ kint(variable) }}
 * Dump all available variables and their contents: {{ dump() }}
 * Dump only the available variable keys: {{ dump(_context|keys) }}
 */
#}
{%
  set classes = [
    'slick',
    settings.unslick ? 'unslick',
    display == 'main' and settings.blazy ? 'blazy',
    settings.vertical ? 'slick--vertical',
    settings.attributes.class ? settings.attributes.class|join(' '),
    settings.skin ? 'slick--skin--' ~ settings.skin|clean_class,
    'boxed' in settings.skin ? 'slick--skin--boxed',
    'split' in settings.skin ? 'slick--skin--split',
    settings.optionset ? 'slick--optionset--' ~ settings.optionset|clean_class,
    arrow_down_attributes is defined ? 'slick--has-arrow-down',
    settings.asNavFor ? 'slick--' ~ display|clean_class,
    settings.slidesToShow > 1 ? 'slick--multiple-view',
    settings.count <= settings.slidesToShow ? 'slick--less',
    display == 'main' and settings.media_switch ? 'slick--' ~ settings.media_switch|clean_class,
    display == 'thumbnail' and settings.thumbnail_caption ? 'slick--has-caption'
  ]
%}
{%
  set arrow_classes = [
    'slick__arrow',
    settings.vertical ? 'slick__arrow--v',
    settings.skin_arrows ? 'slick__arrow--' ~ settings.skin_arrows|clean_class
  ]
%}

<div{{ attributes.addClass(classes) }}>
  {% if not settings.unslick %}
    <div{{ content_attributes.addClass('slick__slider') }}>
  {% endif %}

  {% block slick_content %}
    {% for item in items %}
      {{ item }}
    {% endfor %}
  {% endblock %}

  {% if not settings.unslick %}
    </div>
    {% block slick_arrow %}
      <nav{{ arrow_attributes.addClass(arrow_classes) }}>
        {{ settings.prevArrow|striptags('<a><em><span><strong><button><div>')|raw }}
        {% if arrow_down_attributes is defined %}
          <button{{ arrow_down_attributes.addClass('slick-down')
            .setAttribute('type', 'button')
            .setAttribute('data-target', settings.downArrowTarget)
            .setAttribute('data-offset', settings.downArrowOffset) }}></button>
        {% endif %}
        {{ settings.nextArrow|striptags('<a><em><span><strong><button><div>')|raw }}
      </nav>
    {% endblock %}
  {% endif %}
</div>
", "modules/contrib/slick/templates/slick.html.twig", "C:\\xampp\\htdocs\\desarrollos\\grupoprogestiondev\\web\\modules\\contrib\\slick\\templates\\slick.html.twig");
    }
}
